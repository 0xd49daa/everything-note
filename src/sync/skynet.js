import Dexie from 'dexie'
import 'dexie-syncable'
import { genKeyPairFromSeed, SkynetClient } from 'skynet-js'
import ShortUniqueId from 'short-unique-id'

const POLL_INTERVAL = 10000
const ROOT_ITEM = 'dexie-root-item2'

const uid = new ShortUniqueId()

async function getNextRevision (client, publicKey, revision) {
  if (revision === null) {
    return { nextRevision: ROOT_ITEM, changes: null }
  }

  const { data } = await client.db.getJSON(publicKey, revision)

  return { nextRevision: data?.nextRevision || null, changes: data?.changes || null }
}

Dexie.Syncable.registerSyncProtocol('skynet', {
  sync: async function (context, url, options, baseRevision, syncedRevision, changes, partial, applyRemoteChanges, onChangesAccepted, onSuccess, onError) {
    const client = new SkynetClient(url)
    const { publicKey, privateKey } = genKeyPairFromSeed(options.seed)

    console.log('baseRevision', baseRevision, 'syncedRevision', syncedRevision)

    let currentRevision = syncedRevision
    let nextRevision

    while (true) {
      const response = await getNextRevision(client, publicKey, currentRevision)

      if (!response.nextRevision) {
        break
      }

      nextRevision = response.nextRevision

      if (currentRevision !== syncedRevision) {
        console.log('apply changes', response.changes, currentRevision)
        applyRemoteChanges(response.changes, currentRevision, false, false)
      }

      currentRevision = nextRevision
    }

    console.log('nextRevision', nextRevision)

    if (changes.length > 0) {
      const nextNextRevision = uid()
      console.log('write changes', {
        nextRevision: nextNextRevision,
        changes
      })
      await client.db.setJSON(privateKey, nextRevision, {
        nextRevision: nextNextRevision,
        changes
      })
      console.log('apply changes', [], currentRevision)
      applyRemoteChanges([], nextRevision, false, false)
    }

    onChangesAccepted()
    onSuccess({ again: POLL_INTERVAL })
  }
})

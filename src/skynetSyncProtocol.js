// import Dexie from 'dexie'
// import 'dexie-syncable'
// import { genKeyPairFromSeed, SkynetClient } from 'skynet-js'
//
// const ROOT_ITEM = 'dexie-skynet'
//
// Dexie.Syncable.registerSyncProtocol('skynet', {
//   sync: async function (context, url, options, baseRevision, syncedRevision, changes, partial, applyRemoteChanges, onChangesAccepted, onSuccess, onError) {
//     var request = {
//       clientIdentity: context.clientIdentity || null,
//       baseRevision: baseRevision,
//       partial: partial,
//       changes: changes,
//       syncedRevision: syncedRevision
//     }
//
//     const client = new SkynetClient("https://siasky.net")
//
//     debugger
//
//     const { privateKey } = genKeyPairFromSeed(options.seed)
//
//     const revision = 0
//
//     const entry = {
//       dataKey: ROOT_ITEM,
//       data: changes,
//       revision
//     }
//
//     try {
//       await client.db.setJSON(privateKey, ROOT_ITEM, changes)
//       onChangesAccepted()
//     } catch (error) {
//       console.log(error)
//     }
//   }
// })

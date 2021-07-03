import Dexie from 'dexie'
import 'dexie-syncable'
import './skynetSyncProtocol'

const db = new Dexie('myExistingDb')

db.version(1).stores({
  friends: '++id, name, age'
})

db.syncable.connect('skynet', 'siasky.net', { seed: '0VYdMFlOfL84aHeP6y2MvYVT6BuJ89wF14Nb2XFFW83UWhIKSpirKQYtpmWQzCiBD5q2aiwUHcaAZQi39lfUWif5IeylHE1QOyTY' })

async function add () {
  await db.friends.add({
    name: 'Camilla',
    age: 25,
    street: 'East 13:th Street'
  })
}

add()

import Dexie from 'dexie'
import { DB_NAME } from '../config'
import relationships from 'dexie-relationships'

const db = new Dexie(DB_NAME, { addons: [relationships] })

db.version(1).stores({
  notes: '++id, content',
  tags: '++id, tag',
  noteTags: '++id, noteId -> notes.id, tagId -> tags.id'
})

window.addItems = () => {
  db.transaction('rw', db.notes, db.tags, db.noteTags, () => {
    db.notes.bulkPut([{
      id: 1,
      content: 'First note'
    }, {
      id: 2,
      content: 'Second note'
    }])

    db.tags.bulkPut([{
      id: 1,
      tag: '#first'
    }, {
      id: 2,
      tag: '#second'
    }])

    db.noteTags.bulkPut([{
      noteId: 1,
      tagId: 1
    }, {
      noteId: 2,
      tagId: 1
    }])
  })
}

window.getItems = () => {
  db.notes
    .with({ noteId: 'noteTags', tagId: 'tags' })
    .then(res => {
      console.log(res)
    })
}

// export default db

// db.syncable.connect('skynet', 'siasky.net', { seed: '0VYdMFlOfL84aHeP6y2MvYVT6BuJ89wF14Nb2XFFW83UWhIKSpirKQYtpmWQzCiBD5q2aiwUHcaAZQi39lfUWif5IeylHE1QOyTY' })
//
// async function add () {
//   await db.friends.add({
//     name: 'Camilla',
//     age: 25,
//     street: 'East 13:th Street'
//   })
// }
//
// add()

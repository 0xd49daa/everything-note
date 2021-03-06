import Dexie from 'dexie'
import 'dexie-observable'
import 'dexie-syncable'
import 'dexie-skynet-sync-protocol'

import { DB_NAME } from '../config'

const db = new Dexie(DB_NAME)

db.version(1).stores({
  notes: '$$id, content, createdAt, modifiedAt'
})

db.version(2).stores({
  notes: '$$id, content, createdAt, modifiedAt',
  tags: '$$id, tag',
  noteTags: '$$id, noteId, tagId',
})

export default db

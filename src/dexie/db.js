import Dexie from 'dexie'
import { DB_NAME } from '../config'

const db = new Dexie(DB_NAME)

db.version(1).stores({
  notes: '++id, content'
})

db.version(2).stores({
  notes: '++id, content, createdAt, modifiedAt'
})

export default db

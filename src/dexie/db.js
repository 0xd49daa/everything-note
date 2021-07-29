import Dexie from 'dexie'
import 'dexie-observable'
import 'dexie-syncable'
import './../sync/skynet'
import { DB_NAME } from '../config'
import { LOCALSTORAGE_ENTRY } from '../auth/Auth'

const db = new Dexie(DB_NAME)

db.version(1).stores({
  notes: '$$id, content, createdAt, modifiedAt'
})

db.syncable.connect('skynet', 'https://siasky.net', {
  seed: window.localStorage.getItem(LOCALSTORAGE_ENTRY)
})

export default db

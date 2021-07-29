import db from '../dexie/db'
import ShortUniqueId from 'short-unique-id'

const uid = new ShortUniqueId()

export default class NoteModel {
  static async add () {
    const date = new Date()
    return await db.notes.add({ content: '', createAt: date, modifiedAt: date })
  }

  static async update (id, content) {
    await db.notes.update(id, { content, modifiedAt: new Date() })
  }
}

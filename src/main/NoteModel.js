import db from '../dexie/db'

export default class NoteModel {
  static async add () {
    const date = new Date()
    return await db.notes.add({ content: '', createAt: date, modifiedAt: date })
  }

  static async update (id, content) {
    await db.notes.update(id, { content, modifiedAt: new Date() })
  }
}

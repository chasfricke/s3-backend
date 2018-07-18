const database = require('./database-connection')

module.exports = {
  list() {
    return database('files').select()
  },
  read(files, id) {
    return database('files')
      .select('*')
      .where('id', id)
      .first()
  },
  create(files) {
    return database('files')
      .insert(files)
      .returning('*')
      .then(record => record[0])
  },
  update(files, id) {
    return database('files')
      .update(files)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  delete(files, id) {
    return database('files')
      .delete()
      .where('id', id)
  }
}
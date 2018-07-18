exports.up = function(knex, Promise) {
    return knex.schema.createTable ('files', table => {
        table.increments('id').primary()
        table.string('name', 60)
        table.string('file_upload_url')
        table.string('file_type', 60)
        table.text('description')
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('files')
};

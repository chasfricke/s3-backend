
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('files').del()
    .then(function () {
      // Inserts seed entries
      return knex('files').insert([
        {id: 1, name: 'Jay in mountains', file_upload_url: 'https://s3.amazonaws.com/inventory-images-1234/files/1531939546976_IMG_0044.jpeg', file_type: 'jpg', description: 'Jay in Crested Butte on 6/1/18'}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE files_id_seq RESTART WITH 2;')
    })
};

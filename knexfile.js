require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///s3-upload'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};

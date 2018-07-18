const express = require('express')
const cors = require('cors')
const queries = require('./db/queries')
const bodyParser = require('body-parser')
const database = require('./db/database-connection')
const morgan = require('morgan')

const files = require('./routes/files')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))

app.use('/files', files)



// These 2 `app.use` MUST be last `.use`'s
app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    // Don't log less important (automatic) browser requests
    console.error('[404: Requested file not found] ', url)
  }
  res.status(404).send({error: 'Url not found', status: 404, url})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

module.exports = app;
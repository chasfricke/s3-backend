const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (request, response, next) => {
    queries
      .list('files')
      .then(files => {
        response.json({ files })
      })
      .catch(next)
  })
  
  router.get('/:id', (request, response, next) => {
    queries
      .read('files', request.params.id)
      .then(files => {
        files ? response.json({ files }) : response.sendStatus(404)
      })
      .catch(next)
  })
  
  router.post('/', (request, response, next) => {
    queries
      .create(request.body)
      .then(files => {
        response.status(201).json({ files: files })
      })
      .catch(next)
  })
  
  router.delete('/:id', (request, response, next) => {
    queries
      .delete('files', request.params.id)
      .then(() => {
        response.sendStatus(204)
      })
      .catch(next)
  })
  
  router.put('/:id', (request, response, next) => {
    queries
      .update('files', request.params.id, request.body)
      .then(files => {
        response.json({ files: files[0] })
      })
      .catch(next)
  })

module.exports = router;
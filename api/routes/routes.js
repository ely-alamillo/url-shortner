const express = require('express');

const routes = (server) => {
  const urlControllers = require('../controllers/urlShortnerControllers');

  const apiRoutes = express.Router();
  apiRoutes.route('/shorten')
    .post(urlControllers.shortenUrl);
  apiRoutes.route('/:encodedUrl')
    .get(urlControllers.decodeShortUrl);

  server.route('/:encodedUrl')
    .get(urlControllers.decodeShortUrl);
  server.use('/api', apiRoutes);
};

module.exports = { routes };

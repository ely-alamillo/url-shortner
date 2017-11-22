const express = require('express');

const routes = (server) => {
  const urlControllers = require('../controllers/urlShortnerControllers');

  const apiRoutes = express.Router();
  apiRoutes.route('/shorten')
    .post(urlControllers.shortenUrl);
  apiRoutes.route('/showall')
    .get(urlControllers.showAllUrls);

  server.route('/:encodedUrl')
    .get(urlControllers.decodeShortUrl);

  server.use('/api', apiRoutes);
};

module.exports = { routes };

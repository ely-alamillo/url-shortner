const Url = require('../models/UrlModel');
const dotenv = require('dotenv').config();
const hash = require('../helpers/hash');

const SERVER_USER_ERROR = 422;

// helper function to send errors
const sendUserError = (err, res) => {
  res.status(SERVER_USER_ERROR);
  if (typeof err === 'string') {
    res.json({ err });
    return;
  } else if (err && err.message) {
    res.json({
      message: err.message,
      stack: err.stack
    });
    return;
  }
  res.json(err);
};

// shortens the given url
const shortenUrl = (req, res) => {
  const { longUrl } = req.body;
  let shortUrl = '';
  // check if url has alredy been shortened
  Url.findOne({ long_url: longUrl }, (err, url) => {
    if (err) return sendUserError(err, res);
    if (url) {
      // use for local dev
      // shortUrl = process.env.BASE_URL + hash.encode(url._id);

      // use for prod
      shortUrl = process.env.LIVE_URL + hash.encode(url._id);

      res.json({ shortUrl, existed: true });
      return;
    } else {
      const newUrl = new Url({ long_url: longUrl });
      newUrl.save(err => {
        if (err) return sendUserError(err, res);
        // use for local dev

        // TODO: ELY
        // find better way to do this
        // shortUrl = process.env.BASE_URL + hash.encode(newUrl._id);

        // use for prod
        shortUrl = process.env.LIVE_URL + hash.encode(newUrl._id);

        res.json({ shortUrl, existed: false });
      });
    }
  });
};

// decodes the short url
// TODO: ELY
// maybe change this to support custom shortUrl
// would need to rewrite how this behaves
// lookup shoudl be changed to look for shorturl
// instead of decoding and looking by id
const decodeShortUrl = (req, res) => {
  const { encodedUrl } = req.params;
  const id = hash.decode(encodedUrl);
  Url.findOne({ _id: id }, (err, url) => {
    // if (err) return sendUserError(err, res);
    if (err || url === null) {
      // res.redirect('http://localhost:8080/');
      res.redirect('https://bitsy.herokuapp.com/');
    } else {
      res.redirect(url.long_url);
    }
  });
};

// shows all the urls in the database
const showAllUrls = (req, res) => {
  Url.find({}, (err, urls) => {
    if (err) return sendUserError(err, res);
    res.json(urls);
  });
};

module.exports = {
  shortenUrl,
  decodeShortUrl,
  showAllUrls
};

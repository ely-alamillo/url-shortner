const Url = require('../models/UrlModel');
const dotenv = require('dotenv').config();
const hash = require('../helpers/hash');

const SERVER_USER_ERROR = 422;

const sendUserError = (err, res) => {
  res.status(SERVER_USER_ERROR);
  if (typeof err === 'string') {
    res.json({ err });
    return;
  } else if ( err && err.message) {
    res.json({
      message: err.message,
      stack: err.stack,
    });
    return;
  }
  res.json(err);
};

const shortenUrl = (req, res) => {
  const { longUrl } = req.body;
  let shortUrl = '';
  console.log(longUrl);
  // check if url has alredy been shortened
  Url.findOne({ long_url: longUrl }, (err, url) => {
    if (url) {
      shortUrl = process.env.BASE_URL + hash.encode(url._id);
      res.json({ shortUrl, existed: true });
    } else {
      const newUrl = new Url({ long_url: longUrl });
      newUrl.save((err) => {
        if (err) return sendUserError(err, res);
        shortUrl = process.env.BASE_URL + hash.encode(newUrl._id);
        res.json({ shortUrl })
      });
    }
  });
};

const decodeShortUrl = (req, res) => {
  console.log(req.params);
  const { encodedUrl } = req.params;
  const id = hash.decode(encodedUrl);
  Url.findOne({ _id: id }, (err, url) => {
    if (err) return sendUserError(err, res);
    res.redirect(url.long_url)
    // res.redirect('https://google.com')
    // res.json(url.long_url);
  });
};

const sayHi = (req, res) => {
  res.json({ message: 'hello' });
};

module.exports = {
  shortenUrl,
  decodeShortUrl,
  sayHi,
};

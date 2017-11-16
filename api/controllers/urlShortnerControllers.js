const Url = require('../models/UrlModel');
const dotenv = require('dotenv').config();

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
  // 
  // // check if url has alredy been shortened
  // Url.findOne({ longUrl }, (err, res) => {
  //   shortUrl = process.env.
  // });
};

console.log(process.env.BASE_URL);

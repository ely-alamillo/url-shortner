const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

mongoose.Promise = global.Promise;

// solve eslint error
const logger = console;

// const connect = mongoose.connect('mongodb://localhost/urlShortner', { useMongoClient: true });
const connect = mongoose.connect(
  `${process.env.MONGODB_URI}`,
  { useMongoClient: true }
);

connect.then(() => {
  logger.log('connection to mongoose sucessfull');
}).catch((err) => {
  logger.log('ther was an error connecting to mongoose');
  logger.log(err);
});


const corsOptions = {
  'origin': true,
  'methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
  'preflightContinue': true,
  'optionsSuccessStatus': 204,
  'credentials': true // enable set cookie
};

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

// serves build from npm run build
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const { routes } = require('./api/routes/routes');

routes(app);

app.get('/test', (req, res) => {
  res.json({ message: 'hello ely I am working' });
});


app.listen(process.env.PORT, '0.0.0.0', () => {
  // eslint-disable-next-line
  logger.log(`server running on port ${process.env.PORT}`);
  // console.log('mongo uri: ', process.env.MONGODB_URI);
});

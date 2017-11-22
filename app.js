const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/urlShortner', { useMongoClient: true });

const corsOptions = {
  'origin': 'http://localhost:3000',
  'methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
  'preflightContinue': true,
  'optionsSuccessStatus': 204,
  'credentials': true // enable set cookie
};

const app = express();

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

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line
  console.log(`server running on port ${process.env.PORT}`);
});

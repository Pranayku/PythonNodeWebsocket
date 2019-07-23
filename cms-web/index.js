const path = require('path')
const express = require("express");

const app = express();

const apiCallFromRequest = require('./Request')

app.get('/api/notes', (req, res) =>
  apiCallFromRequest.callApi(function (response) {
    res.send(response);
  })
);

app.post('/api/cart', (req, res) =>
  setTimeout(() => res.status(201).send(), 800)
);

app.post('/api/sign-in', (req, res) => res.status(200).send());

app.use('/api/images', express.static('images'));
app.use('/', express.static('dist', { index: 'index.html' }));

app.listen(8081, () => console.log('Server listening on port 8081!'));


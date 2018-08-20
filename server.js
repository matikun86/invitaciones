/**
 * This server is to run your build locally
 */

const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

const sendEmail = require('./sendEmail.js');

app.use(bodyParser.json())

// serve static assets normally
app.use(express.static(`${__dirname}/public`));
// POST method route
app.post('/email', (req, res) => {
  sendEmail(req.body).then(() => {
    res.sendStatus(200);
  });
})

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);

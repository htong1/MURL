const express = require('express');
/*
Imports the express library.
This is necessary to have an express server.
*/
const bodyParser = require('body-parser');
// Node.js body parsing middleware.

const app = express();
// Telling the app what modules / packages to use
const Database = require("@replit/database")
const db = new Database()

app.use(bodyParser.json());
// Express modules / packages

app.use(bodyParser.urlencoded({ extended: true }));
// Express modules / packages

app.use(express.static('public'));
// load the files that are in the public directory

app.get('/:tokenizer/:longUrl', (req, res) => {
/* This endpoint accepts a longUrl, creates a unique token corrosponding to the long url. Stores the mapping  between the two. Returns the token for constructinng the short url. */
  let longUrl = req.params.longUrl;
  let urlResponse = "this is not read:" + longUrl;
  console.log(longUrl);
  let sUrl = req.protocol + "://" + req.hostname + "/" + createToken()
  console.log(sUrl)
res.json({"shortenUrl":sUrl})

})

app.get('/:token', (req, res) => {
/* This endpoint accepts a token from the short Url. This retreives the long url and redirects the user to it */
  let token = req.params.token;
  let tokenOutput = "this is read from url:" + token;
  console.log(req.protocol + "://" + req.hostname + "/" + token)
  res.redirect('http://google.com')

})

app.listen(3000, () => console.log('server started' + new Date()));

function createToken() {
    let charMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token = "";
    for (let i = 0; i < 6; i++) {
        token += charMap[Math.floor(Math.random() * 62)];
    }
    return token;
}

const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

let port = 3000;
app.listen(port, () => {
  console.log(`the app is running on localhost:${port}`);
});

app.get('/attraction', (req, res) => {
  let location = req.query.location;
  console.log('location', location);
  request(
    {
      url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyC8qLjFTmMo0etL1tVO3OdLBrEKx41Qko0&language=zh-TW&input=${location}&inputtype=textquery`,
      method: 'GET',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    (e, r, b) => {
      if (!e) {
        res.send(`${b}`);
      }
    }
  );
});

app.get('/park', (req, res) => {
  let location = req.query.location;
  console.log('park', location);
  request(
    {
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=500&types=parking&language=zh-TW&sensor=false&key=AIzaSyC8qLjFTmMo0etL1tVO3OdLBrEKx41Qko0`,
      method: 'GET',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    (e, r, b) => {
      if (!e) {
        res.send(`${b}`);
      }
    }
  );
});

app.get('/store', (req, res) => {
  let storeid = req.query.storeid;
  request(
    {
      url: `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyC8qLjFTmMo0etL1tVO3OdLBrEKx41Qko0&placeid=${storeid}`,
      method: 'GET',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    (e, r, b) => {
      if (!e) {
        res.send(`${b}`);
      }
    }
  );
});

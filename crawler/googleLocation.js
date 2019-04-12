const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('view engine', 'pug');

let port = 3005;
app.listen(port, () => {
  console.log(`the app is running on localhost:${port}`);
});

app.get('/attraction', (req, res) => {
  let location = req.query.location;
  console.log('location', location);
  request(
    {
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyC8qLjFTmMo0etL1tVO3OdLBrEKx41Qko0&radius=500&location=${location}&language=zh-TW`,
      method: 'GET',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    (e, r, b) => {
      if (!e) {
        // res.json({ data: `${b}` });
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
        // res.json({ data: `${b}` });
        res.send(`${b}`);
      }
    }
  );
});

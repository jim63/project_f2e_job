const express = require('express');
const app = express();
const request = require('request');
const db = require('./db');
const cheerio = require('cheerio');

var cheerio = require('cheerio');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('view engine', 'pug');

let port = 3000;
app.listen(port, () => {
  console.log(`the app is rumming on localhost:${port}`);
});

let count = 0;
for (let page = 1; page < 2; page++) {
  request(
    {
      //! yourator 前端工程師 正職
      url: `https://www.yourator.co/api/v2/jobs?category[]=7&position[]=1&page=5`,
      method: 'GET',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    function(e, r, b) {
      if (!e) {
        console.log(JSON.parse(b).jobs);
      }
    }
  );
}
setTimeout(() => {
  console.log('count', count);
}, 10000);

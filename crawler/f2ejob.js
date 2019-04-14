const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');
const db = require('./db');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

let port = 3306;
app.listen(port, () => {
  console.log(`the app is running on localhost:${port}`);
});

app.get('/yourator', (req, res) => {
  let page = req.query.page || 1;
  console.log('location', page);
  db.query(`SELECT * FROM job_yourator LIMIT ${(Number(page) - 1) * 18}, 18`, (err, result, fields) => {
    console.log(`SELECT * FROM job_yourator LIMIT ${page},${page + 5}`);
    res.send(result);
  });
});

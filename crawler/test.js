const express = require('express');
const app = express();
const request = require('request');
const db = require('./db');
const cheerio = require('cheerio');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('view engine', 'pug');

let port = 3005;
app.listen(port, () => {
  console.log(`the app is rumming on localhost:${port}`);
});

db.query('SELECT * from jobs.job_104;', function(error, results, fields) {
  if (error) throw error;
  console.log(results);
});

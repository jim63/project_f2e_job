const rp = require('request-promise');
const cheerio = require('cheerio');
const Table = require('cli-table');

let users = [];

const option = { url: `https://www.freecodecamp.org/forum/users`, json: true };

app.use(function(req, res, next) {
  res.writeHead('Content-Type', 'application/json; charset=utf-8');
  next();
});

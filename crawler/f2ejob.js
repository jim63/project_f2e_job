const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const request = require('request');
const cheerio = require('cheerio');
const db = require('./db');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());

app.use(function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:7000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');

  next();
});

let port = 3306;
app.listen(port, () => {
  console.log(`the app is running on localhost:${port}`);
});

app.get('/yourator', (req, res) => {
  let page = req.query.page || 1;
  db.query(`SELECT COUNT (id) FROM job_yourator;`, (err, result, fields) => {
    let totalPage = Math.ceil(result[0]['COUNT (id)'] / 18);
    db.query(`SELECT * FROM job_yourator LIMIT ${(Number(page) - 1) * 18}, 18`, (err, result, fields) => {
      res.json({ jobs: result, totalPage: totalPage });
    });
  });
});

app.post('/signUp', (req, res) => {
  const saltRounds = 10;
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  bcrypt.hash(password, saltRounds).then(function(hash) {
    password_hash = hash;
    db.query(`SELECT * FROM member where email = '${email}';`, (err, result, fields) => {
      if (err) {
        res.json({ signUp: 'err1' });
      }
      if (result.length == 0) {
        db.query(
          `INSERT INTO member(name,email,password_hash,session_id) VALUE ('${name}','${email}','${password_hash}','${password_hash}');`,
          (err, result, fields) => {
            if (err) {
              res.json({ signUp: 'err2' });
            } else {
              res.cookie('session_id', password_hash);
              res.json({ signUp: 'success' });
            }
          }
        );
      } else {
        res.json({ signUp: 'already_singUp' });
      }
    });
  });
});

app.post('/signIn', (req, res) => {
  const saltRounds = 10;
  let email = req.body.email;
  let password = req.body.password;
  db.query(`SELECT * FROM member where email = '${email}';`, (err, result, fields) => {
    if (err) {
      res.json({ signIn: 'err1' });
    }
    if (result.length == 0) {
      res.send({ signIn: 'email_not_found' });
    } else {
      let password_hash = result[0].password_hash;
      bcrypt.compare(password, password_hash).then(function(result) {
        if (result) {
          bcrypt.hash(password, saltRounds).then(function(session_id) {
            console.log(session_id);

            db.query(
              `UPDATE member SET session_id = '${session_id}' WHERE email = '${email}';`,
              (err, result, fields) => {
                if (err) {
                  res.json({ signIn: 'try_again' });
                } else {
                  console.log(session_id);

                  res.cookie('session_id', session_id);
                  res.json({ signIn: 'success' });
                }
              }
            );
          });
        } else {
          res.json({ signIn: 'wrong_password' });
        }
      });
    }
  });
});

app.get('/test', (req, res) => {
  console.log('ssss', req.cookies.session_id);
  res.json({ aaa: '123' });
});

const saltRounds = 10;
const myPassword = '123';
const testPassword = 'password2';
const myHash = '$2b$10$p4pTcLZfZq.PQ6Ssc8.TJuGv7Nj8ZTqAlSzY59V3mWw0Ab/jK1Apy'; // myPassword加密後結果(驗證用)

bcrypt.hash(myPassword, saltRounds).then(function(hash) {
  // Store hash in your password DB.
  // console.log(hash);
});

bcrypt.compare('113', myHash).then(function(res) {
  // console.log(res); // true
});

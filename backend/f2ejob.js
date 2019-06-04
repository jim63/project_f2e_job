const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const cheerio = require('cheerio');
const fs = require('fs');
const https = require('https');

const request = require('request');
const db = require('./db');

var privateKey = fs.readFileSync('./ssl/private.key');
var certificate = fs.readFileSync('./ssl/certificate.crt');
var credentials = { key: privateKey, cert: certificate };

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
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

let port = 80;
app.listen(port, () => {
  console.log(`the app is running on localhost:${port}`);
});

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443);

app.get('/favo', (req, res) => {
  let session_id = req.cookies.session_id;
  let sql = `SELECT * FROM member where session_id= '` + db.escape(session_id) + `'`;
  db.query(sql, (err, result, fields) => {
    if (result.length === 0) {
      res.status(301).redirect('/');
    } else {
      res.sendfile('./public/index.html');
    }
  });
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

app.get('/104', (req, res) => {
  let page = req.query.page || 1;
  db.query(`SELECT COUNT (id) FROM job_104;`, (err, result, fields) => {
    let totalPage = Math.ceil(result[0]['COUNT (id)'] / 18);
    db.query(`SELECT * FROM job_104 LIMIT ${(Number(page) - 1) * 18}, 18`, (err, result, fields) => {
      result.forEach(e => {
        let digit_low = e.salary_low.split('').findIndex(val => val > 0);
        let salary_low = e.salary_low
          .slice(digit_low)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        console.log('\n');
        let digit_high = e.salary_high.split('').findIndex(val => val > 0);
        let salary_high = e.salary_high
          .slice(digit_high)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        e.salary = `NT$ ${salary_low} - ${salary_high} (月薪)`;
      });

      res.json({ jobs: result, totalPage: totalPage });
    });
  });
});

app.get('/meetjobs', (req, res) => {
  let page = req.query.page || 1;
  db.query(`SELECT COUNT (id) FROM job_meetjobs;`, (err, result, fields) => {
    let totalPage = Math.ceil(result[0]['COUNT (id)'] / 18);
    db.query(`SELECT * FROM job_meetjobs LIMIT ${(Number(page) - 1) * 18}, 18`, (err, result, fields) => {
      res.json({ jobs: result, totalPage: totalPage });
    });
  });
});

app.get('/find', (req, res) => {
  console.log(req.query);
  let source = req.query.source;
  let id = req.query.id;
  if (source === '104') {
    db.query(`SELECT * FROM job_104 where job_id=${id}`, (e, r, b) => {
      if (e) {
        return e;
      }
      if (r.length > 0) {
        r.forEach(e => {
          let digit_low = e.salary_low.split('').findIndex(val => val > 0);
          let salary_low = e.salary_low
            .slice(digit_low)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

          console.log('\n');
          let digit_high = e.salary_high.split('').findIndex(val => val > 0);
          let salary_high = e.salary_high
            .slice(digit_high)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          e.salary = `NT$ ${salary_low} - ${salary_high} (月薪)`;
        });
      }
      res.json({ data: r });
    });
  } else if (source === 'yourator') {
    db.query(`SELECT * FROM job_yourator where job_id=${id}`, (e, r, b) => {
      if (e) {
        return e;
      }
      if (r.length > 0) {
        console.log(r);
        res.json({ data: r });
      }
    });
  } else if (source === 'meetjobs') {
    db.query(`SELECT * FROM job_meetjobs where job_id=${id}`, (e, r, b) => {
      if (e) {
        return e;
      }
      if (r.length > 0) {
        console.log(r);
        res.json({ data: r });
      }
    });
  }
});

app.get('/search', (req, res) => {
  let keywords = req.query.keyword;
  console.log(keywords);

  function splitStr(sChars) {
    var str = '';
    for (var i = 0; (schar = sChars.charAt(i)); i++) {
      if (typeof schar == 'undefined' || typeof sChars.charAt(i + 1) == 'undefined') break;
      str += schar;
      if (getStrLength(schar) != getStrLength(sChars.charAt(i + 1))) {
        str += ',';
      }
    }
    // return str;
    return str.trim().split(',');
  }

  function getStrLength(str) {
    var cArr = str.match(/[^\x00-\xff]/gi);
    return str.length + (cArr == null ? 0 : cArr.length);
  }
  let keywords_split = splitStr(keywords).slice(0, splitStr(keywords).length - 1);
  let keywords_use = keywords_split.length > 4 ? keywords_split.slice(0, 4) : keywords_split;
  let query = '';
  let search = (keyword, source) => {
    let query_arr = [];
    keyword.map(e => {
      let each_string = '(';
      let e_length = e.length;
      e.split('').map((w, i) => {
        if (i !== e_length - 1) {
          each_string += `company_name like '%${w}%' and `;
        } else {
          each_string += `company_name like '%${w}%'`;
        }
      });
      each_string += ')';
      query_arr.push(each_string);
      query = query_arr.join(' or ');
      console.log(query);
    });

    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM job_${source} where ${query}`, (err, result, fields) => {
        if (err) {
          resolve(err);
        }
        if (source == 104) {
          result.forEach(e => {
            let digit_low = e.salary_low.split('').findIndex(val => val > 0);
            let salary_low = e.salary_low
              .slice(digit_low)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            console.log('\n');
            let digit_high = e.salary_high.split('').findIndex(val => val > 0);
            let salary_high = e.salary_high
              .slice(digit_high)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            e.salary = `NT$ ${salary_low} - ${salary_high} (月薪)`;
          });
        }
        resolve(result);
      });
    });
  };

  let query_result = Promise.all([search(keywords_use, 'yourator'), search(keywords_use, '104'), search(keywords_use, 'meetjobs')]).then(data => {
    let data_yourator = data[0];
    let data_104 = data[1];
    let data_meetjobs = data[2];
    res.json({ data: { yourator: data_yourator, '104': data_104, meetjobs: data_meetjobs } });
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
        res.json({ signUp: err });
      }
      if (result.length == 0) {
        db.query(
          `INSERT INTO member(name,email,password_hash,session_id,favorite_job) VALUE ('${name}','${email}','${password_hash}','${password_hash}','{"yourator":[],"104":[],"meetjobs":[]}');`,
          (err, result, fields) => {
            if (err) {
              console.log(err);

              res.json({ signUp: 'err1' });
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
      let name = result[0].name;
      let favorite_job = result[0].favorite_job;
      let password_hash = result[0].password_hash;
      bcrypt.compare(password, password_hash).then(function(result) {
        if (result) {
          bcrypt.hash(password, saltRounds).then(function(session_id) {
            db.query(`UPDATE member SET session_id = '${session_id}' WHERE email = '${email}';`, (err, result, fields) => {
              if (err) {
                res.json({ signIn: 'try_again' });
              } else {
                res.cookie('session_id', session_id);
                res.json({ signIn: 'success', name: name, email: email, favorite_job: favorite_job });
              }
            });
          });
        } else {
          res.json({ signIn: 'wrong_password' });
        }
      });
    }
  });
});

app.post('/checkSessionID', (req, res) => {
  let session_id = unescape(req.body.session_id);
  db.query(`SELECT * FROM member where session_id= '${session_id}'`, (err, result, fields) => {
    if (result.length === 0) {
      res.json({ result: 'not_found' });
    } else {
      res.json({
        result: 'found',
        email: result[0].email,
        name: result[0].name,
        favorite_job: JSON.parse(result[0].favorite_job)
      });
    }
  });
});

app.post('/logout', (req, res) => {
  let session_id = unescape(req.body.session_id);
  db.query(`UPDATE member SET session_id = '' WHERE session_id = '${session_id}'`, (err, result, fields) => {
    if (result.length === 0) {
      res.json({ result: 'fail' });
    } else {
      res.json({
        result: 'success'
      });
    }
  });
});

app.post('/addFavo', (req, res) => {
  let session_id = req.cookies.session_id;
  let source = req.body.source;
  let jobid = req.body.jobid;
  db.query(`SELECT * FROM member where session_id = '${session_id}'`, (err, result, fields) => {
    console.log('rrr', result);

    let favo_list = JSON.parse(result[0].favorite_job);

    console.log('list', favo_list);

    if (favo_list[source].indexOf(jobid) === -1) {
      console.log('prev', favo_list);
      favo_list[source].push(jobid);
      console.log('new', favo_list);
      let favo_list_str = JSON.stringify(favo_list);
      db.query(`UPDATE member SET favorite_job = '${favo_list_str}' WHERE session_id='${session_id}'`, (err, result, fields) => {
        if (err) {
          res.json({ favo_list: JSON.stringify(favo_list) });
        }
        res.json({ favo_list: favo_list_str });
      });
    } else {
      res.json({ favo_list: JSON.stringify(favo_list) });
    }
  });
});

app.post('/removeFavo', (req, res) => {
  let session_id = req.cookies.session_id;
  let source = req.body.source;
  let jobid = req.body.jobid;

  console.log(session_id, source, jobid);

  db.query(`SELECT * FROM member where session_id = '${session_id}'`, (err, result, fields) => {
    let favo_list = JSON.parse(result[0].favorite_job);
    if (favo_list[source].indexOf(jobid) !== -1) {
      console.log('prev', favo_list);
      let new_spec = favo_list[source].filter(ele => {
        return ele != jobid;
      });
      favo_list[source] = new_spec;
      console.log('new', favo_list);

      let favo_list_str = JSON.stringify(favo_list);
      db.query(`UPDATE member SET favorite_job = '${favo_list_str}' WHERE session_id='${session_id}'`, (err, result, fields) => {
        if (err) {
          res.json({ favo_list: JSON.stringify(favo_list) });
        }
        res.json({ favo_list: favo_list_str });
      });
    } else {
      res.json({ favo_list: JSON.stringify(favo_list) });
    }
  });
});

app.post('/favo', (req, res) => {
  let favo = req.body.favo;
  console.log('favo', favo);

  let favo_104 = { '104': favo['104'] };
  let favo_yourator = { yourator: favo['yourator'] };
  let favo_meetjobs = { meetjobs: favo['meetjobs'] };

  let query_favo = obj => {
    let source = Object.keys(obj)[0];
    let id = obj[source];

    console.log(source, id);
    if (id.length !== 0) {
      return new Promise((resolve, reject) => {
        db.query(
          `SELECT * FROM job_${source} where job_id IN (${id.map(ele => {
            return "'" + ele + "'";
          })});`,
          (err, result, fields) => {
            if (err) {
              resolve(err);
            }
            if (source == 104) {
              result.forEach(e => {
                let digit_low = e.salary_low.split('').findIndex(val => val > 0);
                let salary_low = e.salary_low
                  .slice(digit_low)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                console.log('\n');
                let digit_high = e.salary_high.split('').findIndex(val => val > 0);
                let salary_high = e.salary_high
                  .slice(digit_high)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                e.salary = `NT$ ${salary_low} - ${salary_high} (月薪)`;
              });
            }
            resolve(result);
          }
        );
      });
    } else {
      return new Promise(resolve => {
        resolve([]);
      });
    }
  };

  let query_result = Promise.all([query_favo(favo_yourator), query_favo(favo_104), query_favo(favo_meetjobs)]).then(data => {
    let data_yourator = data[0];
    let data_104 = data[1];
    let data_meetjobs = data[2];
    res.json({ data: { yourator: data_yourator, '104': data_104, meetjobs: data_meetjobs } });
  });
});

app.get('/jobs/:source/:id', (req, res) => {
  console.log(21321312);

  res.sendfile('./public/index.html');
});

let query_favo = async (source, id) => {
  let gg = await new Promise((resolve, reject) => {
    console.log(
      `SELECT job_name FROM job_${source} where job_id IN (${id.map(ele => {
        return "'" + ele + "'";
      })});`
    );

    db.query(
      `SELECT job_id FROM job_${source} where job_id IN (${id.map(ele => {
        return "'" + ele + "'";
      })});`,
      (err, result, fields) => {
        if (err) {
          resolve(err);
        }
        resolve(result);
      }
    );
  });
};

query_favo('yourator', [6955, 6986, 5836, 2835, 5430, 3320, 6889, 4920, 7262, 1143, 5115, 7161, 4788]);

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

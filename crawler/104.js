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
});

function getTotalPage() {
  return new Promise(function(resolve, reject) {
    request(
      {
        //! 104  一個月內更新，月薪 40000up，日班
        url: `https://www.104.com.tw/jobs/search/list?ro=1&isnew=30&kwop=1&keyword=%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB&order=11&asc=0&sctp=M&scmin=40000&scstrict=1&scneg=0&s9=1&page=3&mode=s&jobsource=2018indexpoc`,
        method: 'GET',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      (e, r, b) => {
        if (!e) {
          let data = JSON.parse(b).data;
          resolve(data.totalPage);
        }
      }
    );
  });
}

function getJobsFromPage(page) {
  return new Promise(function(resolve, reject) {
    request(
      {
        //! 104  一個月內更新，月薪 40000up，日班
        url: `https://www.104.com.tw/jobs/search/list?ro=1&isnew=30&kwop=1&keyword=%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB&order=11&asc=0&sctp=M&scmin=40000&scstrict=1&scneg=0&s9=1&page=${page}&mode=s&jobsource=2018indexpoc`,
        method: 'GET',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      (e, r, b) => {
        if (!e) {
          let data = JSON.parse(b).data.list;
          // resolve(data.);
          resolve(data);
        }
      }
    );
  });
}

function goJobPage(url_job_page, time) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      request(
        {
          //! 104  一個月內更新，月薪 40000up，日班
          url: url_job_page,
          method: 'GET',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        (e, r, b) => {
          console.log(url_job_page);
          if (e) {
            console.log('err', e);
          }
          let $ = cheerio.load(b);
          let target_dt = [];
          $('dt').each(function(i, elem) {
            if (
              $(this)
                .text()
                .indexOf('人數') !== -1
            ) {
              target_dt.push($(this));
            }
          });
          console.log('qqqq', target_dt.length);

          if (target_dt.length > 0) {
            resolve(`${target_dt[0].next().text()}`);
          }
        }
      );
    }, time * 10000);
  });
}

getTotalPage().then(totalPages => {
  db.query('delete from job_104;', () => {
    for (let page = 1; page <= totalPages; page++) {
      getJobsFromPage(page).then(data => {
        for (let i = 0; i < data.length; i++) {
          let job_info = {};

          job_info.job_name = data[i].jobNameRaw;
          job_info.salary_low = data[i].salaryLow;
          job_info.salary_high = data[i].salaryHigh;

          // job_info.amount = data[i].jobName;
          job_info.appear_date = data[i].appearDate;
          job_info.apply_amount = data[i].applyDesc;
          job_info.location = data[i].jobAddrNoDesc;
          job_info.address = data[i].jobAddress;
          job_info.job_description = data[i].description;
          job_info.company_name = data[i].custNameRaw;
          job_info.company_scale = data[i].tags[0];
          job_info.link_job = data[i].link.job.slice(2);
          job_info.link_apply_analysis = data[i].link.applyAnalyze.slice(2);
          job_info.link_company = data[i].link.cust.slice(2);

          goJobPage(`https://${job_info.link_job}`, i * page + page).then(data => {
            console.log(`${data}\n`);
            job_info.amount = data;

            db.query(`INSERT INTO job_104(job_name,salary_low,salary_high,apply_amount,location,address,job_description,company_name,company_scale,link_job,link_apply_analysis,link_company,appear_date,require_amount)
           VALUE ('${job_info.job_name}','${job_info.salary_low}','${job_info.salary_high}','${
              job_info.apply_amount
            }','${job_info.location}','${job_info.address}','${job_info.job_description}','${job_info.company_name}','${
              job_info.company_scale
            }','${job_info.link_job}','${job_info.link_apply_analysis}','${job_info.link_company}','${
              job_info.appear_date
            }','${job_info.amount}');`);
          });
        }
      });
    }
  });
});
// totlaPages.then(totlaPage => {
//   console.log(totlaPage);
// });

// let $ = cheerio.load(`<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Home page</title>
//     <style>
//         .fpar {
//             font-family: Georgia;
//         }
//     </style>
// </head>

// <body>
//     <main>
//         <h1>My website</h1>

//         <p class="fpar">
//             I am a JavaScript programmer.
//         </p>

//         <p>
//             My hobbies are:
//         </p>

//         <ul>
//             <li>Swimming</li>
//             <li>Tai Chi</li>
//             <li>Running</li>
//             <li>Web development</li>
//             <li>Reading</li>
//             <li>Music</li>
//         </ul>
//     </main>
// </body>

// </html>`);

// // console.log(li.contents().text());

// let li = [];
// $('li').each(function(i, elem) {
//   if (
//     $(this)
//       .text()
//       .indexOf('wimm') !== -1
//   ) {
//     li.push($(this));
//   }
// });

// console.log(li[0].next().text());

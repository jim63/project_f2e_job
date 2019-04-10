const express = require('express');
const app = express();
const axios = require('axios');
const db = require('./db');
const cheerio = require('cheerio');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('view engine', 'pug');

let port = 3000;
app.listen(port, () => {
  console.log(`the app is rumming on localhost:${port}`);
});

axios.get(`https://www.yourator.co/api/v2/jobs?category[]=7&position[]=1&page=1`).then(res => {
  let total_job = Number(res.data.total);
  console.log(total_job);
  for (let page = 1; page <= Math.ceil(total_job / 20); page++) {
    axios.get(`https://www.yourator.co/api/v2/jobs?category[]=7&position[]=1&page=${page}`).then(res => {
      for (job of res.data.jobs) {
        let job_info = {};
        job_info.job_id = job.id;
        job_info.job_name = job.name;
        job_info.company_name = job.company.brand;
        job_info.company_tag = (() => {
          let company_tag = [];
          for (i of job.tags) {
            company_tag.push(i.name);
          }
          return String(company_tag);
        })();
        job_info.skill_tag = (() => {
          let skill_tag = [];
          for (i of job.skill_tags) {
            skill_tag.push(i.name);
          }
          return String(skill_tag);
        })();
        job_info.salary = job.salary;
        job_info.link_job = `https://www.yourator.co${job.path}`;
        job_info.link_company = `https://www.yourator.co${job.company.path}`;
        job_info.location = job.company.area;
        job_info.company_picture = job.company.banner;
        //todo job_description
        //todo company_scale
        // console.log(job_info);
        console.log(`INSERT INTO job_yourator(job_id,job_name,skill_tag,salary,location,company_name,company_tag,company_picture,link_job,link_company)
        VALUE ('${job_info.job_id}','${job_info.job_name}','${job_info.skill_tag}','${job_info.salary}','${
          job_info.location
        }','${job_info.company_name}','${job_info.company_tag}','${job_info.company_picture}','${job_info.link_job}','${
          job_info.link_company
        }');`);
        console.log(`\n`);

        db.query(`INSERT INTO job_yourator(job_id,job_name,skill_tag,salary,location,company_name,company_tag,company_picture,link_job,link_company)
        VALUE ('${job_info.job_id}','${job_info.job_name}','${job_info.skill_tag}','${job_info.salary}','${
          job_info.location
        }','${job_info.company_name}','${job_info.company_tag}','${job_info.company_picture}','${job_info.link_job}','${
          job_info.link_company
        }');`);
      }
    });
  }
});

// let count = 0;
// for (let page = 1; page < 2; page++) {
//   request(
//     {
//       //! yourator 前端工程師 正職
//       url: `https://www.yourator.co/api/v2/jobs?category[]=7&position[]=1&page=1`,
//       method: 'GET',
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     function(e, r, b) {
//       if (!e) {
//         console.log(JSON.parse(b).jobs.length);
//       }
//     }
//   );
// }

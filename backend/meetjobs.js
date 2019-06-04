const express = require('express');
const app = express();
const request = require('request');
const db = require('./db');
const cheerio = require('cheerio');

app.set('view engine', 'pug');
app.use(express.static('public'));

let port = 3007;
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
        //! meetjobs  前端 台灣 正職
        url: `https://api.meet.jobs/api/v1/jobs?page=1&work_types=full_time&order=match&q=%E5%89%8D%E7%AB%AF&place=taiwan&include=required_skills&external_job=true`,
        method: 'GET',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      (e, r, b) => {
        if (!e) {
          let data = JSON.parse(b).paginator.total_pages;
          resolve(data);
        }
      }
    );
  });
}

function getJobsFromPage(page) {
  return new Promise(function(resolve, reject) {
    request(
      {
        //! meetjobs  前端 台北 正職
        url: `https://api.meet.jobs/api/v1/jobs?page=${page}&work_types=full_time&order=match&q=%E5%89%8D%E7%AB%AF&place=%E5%8F%B0%E5%8C%97&include=required_skills&external_job=true`,
        method: 'GET',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      (e, r, b) => {
        if (!e) {
          let data = JSON.parse(b).collection;
          resolve(data);
        }
      }
    );
  });
}

getTotalPage().then(totalPages => {
  console.log('meetjobs totalPage', totalPages);
  db.query('delete from job_meetjobs;', () => {
    for (let page = 1; page <= totalPages; page++) {
      getJobsFromPage(page).then(data => {
        for (let i = 0; i < data.length; i++) {
          let job_info = {};
          job_info.job_id = data[i].id;
          job_info.job_name = data[i].title;
          job_info.appear_date = data[i].published_at;
          job_info.location = data[i].address.handwriting_city;
          job_info.address = data[i].address.handwriting_street.replace(/'/g, "''");
          job_info.job_description = data[i].description.replace(/'/g, "''");
          job_info.company_name = data[i].employer.name;
          job_info.company_scale = data[i].employer.company_size;
          job_info.link_job = `https://meet.jobs/jobs/${data[i].id}`;
          job_info.link_company = `https://meet.jobs/employers/${data[i].employer.id}`;
          job_info.picture = data[i].employer.logo.url;
          job_info.skill_tag = (() => {
            let skill_tag = [];

            for (j of data[i].required_skills) {
              skill_tag.push(j.name);
            }
            return String(skill_tag);
          })();

          job_info.salary = (() => {
            let period = data[i].salary.paid_period_key;
            let per_translate = `${period === 'monthly' ? '月薪' : period === 'annually' ? '年薪' : 'null'}`;
            //! monthly  annually
            if (data[i].salary.minimum) {
              var salary_low = data[i].salary.minimum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            } else {
              salary_low = null;
            }

            if (data[i].salary.maximum) {
              var salary_high = ' ~ ' + data[i].salary.maximum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            } else {
              var salary_high = null;
            }

            let salary_string = `NT$ ${salary_low} ${salary_high === null ? '' : salary_high} (${per_translate})`;
            return salary_string;
          })();

          db.query(
            `INSERT INTO job_meetjobs(job_name,salary,location,address,job_description,company_name,company_scale,link_job,link_company,appear_date,picture,job_id,skill_tag)
            VALUE ('${job_info.job_name}','${job_info.salary}','${job_info.location}','${job_info.address}','${job_info.job_description}','${
              job_info.company_name
            }','${job_info.company_scale}','${job_info.link_job}','${job_info.link_company}','${job_info.appear_date}','${job_info.picture}','${
              job_info.job_id
            }','${job_info.skill_tag}');`,
            (err, body, results) => {
              if (err) {
                console.log(err.sql);
              }
            }
          );
        }
      });
    }
  });
});
// }
// });

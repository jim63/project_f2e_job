const express = require('express');
const app = express();
const axios = require('axios');
const db = require('./db');
const cheerio = require('cheerio');
const request = require('request');

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('view engine', 'pug');

let port = 3007;
app.listen(port, () => {
  console.log(`the app is running on localhost:${port}`);
});

axios.get(`https://www.yourator.co/api/v2/jobs?category[]=7&position[]=1&page=1`).then(res => {
  let total_job = Number(res.data.total);
  console.log(total_job);
  db.query('delete from job_yourator;', () => {
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
          goJobPage(`${job_info.link_job}`).then(data => {
            job_info.job_description = data.jd[0];
            job_info.requirements = data.jd[1];
            job_info.benefits = data.jd[2];
            job_info.address = data.info.addr;
            job_info.company_scale = data.info.scale;
            job_info.company_description = data.info.company_desc;

            db.query(
              `INSERT INTO job_yourator(job_id,job_name,skill_tag,salary,location,company_name,company_tag,company_picture,link_job,link_company,job_description,requirements,benefits,company_scale,address,company_description)
            VALUE ('${job_info.job_id}','${job_info.job_name}','${job_info.skill_tag}','${job_info.salary}','${job_info.location}','${
                job_info.company_name
              }','${job_info.company_tag}','${job_info.company_picture}','${job_info.link_job}','${job_info.link_company}','${job_info.job_description}','${
                job_info.requirements
              }','${job_info.benefits}','${job_info.company_scale}','${job_info.address}','${job_info.company_description}');`,
              () => {
                console.log('ok');
              }
            );
          });
        }
      });
    }
  });
});

function goJobPage(url_job_page, time = 0) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      request(
        {
          url: url_job_page,
          method: 'GET',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        (e, r, b) => {
          if (e) {
            console.log('err', e);
          }
          let $ = cheerio.load(b, { decodeEntities: false });
          let jd = [];
          $('.col-md-10 article').each((i, elem) => {
            jd.push($(elem).html()) || '';
          });

          info = {};
          $('.basic-info-text').each((i, elem) => {
            if (
              $(elem)
                .text()
                .indexOf('地址') !== -1
            ) {
              // info.addr = $('span', elem).data('original-title');

              if (
                $('span', elem)
                  .text()
                  .indexOf('...') !== -1
              ) {
                info.addr = $('span', elem).attr('title');
              } else {
                info.addr = $('span', elem).text();
              }
            } else if (
              $(elem)
                .text()
                .indexOf('規模') !== -1
            ) {
              info.scale =
                $(elem).text().length > 5
                  ? $(elem)
                      .text()
                      .slice(5)
                  : '';
            }
          });

          info.company_desc = $('.company-description').text();

          resolve({ jd: jd, info: info });
        }
      );
    }, time * 2000);
  });
}

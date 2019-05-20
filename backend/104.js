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
        // url: `https://www.104.com.tw/jobs/search/list?ro=1&isnew=30&kwop=1&keyword=%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB&order=11&asc=0&sctp=M&scmin=40000&scstrict=1&scneg=0&s9=1&page=3&mode=s&jobsource=2018indexpoc`,
        url: `https://www.104.com.tw/jobs/search/list?ro=0&isnew=30&kwop=7&keyword=%E5%89%8D%E7%AB%AF&order=1&asc=0&sr=99&page=1&mode=s&jobsource=2018indexpoc`,
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
        // url: `https://www.104.com.tw/jobs/search/list?ro=1&isnew=30&kwop=1&keyword=%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB&order=11&asc=0&sctp=M&scmin=40000&scstrict=1&scneg=0&s9=1&page=${page}&mode=s&jobsource=2018indexpoc`,
        url: `https://www.104.com.tw/jobs/search/list?ro=0&isnew=30&kwop=7&keyword=%E5%89%8D%E7%AB%AF&order=1&asc=0&sr=99&page=${page}&mode=s&jobsource=2018indexpoc`,
        method: 'GET',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      (e, r, b) => {
        if (!e) {
          console.log(b);

          let data = JSON.parse(b).data.list;

          resolve(data);
        }
      }
    );
  });
}

function goJobPage(url_job_page, time) {
  console.log('qqq', time);

  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      request(
        {
          url: url_job_page,
          method: 'GET',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        (e, r, b) => {
          console.log(url_job_page);
          if (e) {
            console.log('err', e);
          }
          let $ = cheerio.load(b, { decodeEntities: false });
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

          let pictureURL;
          $('.images figure img').each((i, elem) => {
            if (i == 0) {
              pictureURL = $(elem).attr('src');
            }
          });

          let info = {};

          $('.info').each((i, ele) => {
            if (
              $('h2', ele)
                .text()
                .indexOf('公司福利') !== -1
            ) {
              info.benefits = `<p>${$('.content p', ele).html()}</p>`;
            } else if (
              $('h2', ele)
                .text()
                .indexOf('工作內容') !== -1
            ) {
              info.desc = `<p>${$('.content p', ele).html()}</p>`;
            }
          });

          info.date = $('.update')
            .text()
            .slice(5);

          let detail = {};
          $('dt').each((i, ele) => {
            if (
              $(ele)
                .text()
                .indexOf('工作性質') !== -1
            ) {
              detail.type = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('出差外派') !== -1
            ) {
              detail.trip = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('休假制度') !== -1
            ) {
              detail.holiday = $(ele)
                .next()
                .text();
            }
          });

          let req = {};
          $('dt').each((i, ele) => {
            if (
              $(ele)
                .text()
                .indexOf('工作經歷') !== -1
            ) {
              req.exp = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('學歷要求') !== -1
            ) {
              req.deg = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('科系要求') !== -1
            ) {
              req.industry = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('語文條件') !== -1
            ) {
              req.lang = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('休假制度') !== -1
            ) {
              req.holiday = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('擅長工具') !== -1
            ) {
              req.tool = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('工作技能') !== -1
            ) {
              req.tech = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('其他條件') !== -1
            ) {
              req.others = $(ele)
                .next()
                .text();
            } else if (
              $(ele)
                .text()
                .indexOf('上班地點') !== -1
            ) {
              req.address = $(ele)
                .next()
                .text();
            }
          });

          info.detail = detail;
          info.req = req;

          if (target_dt.length > 0) {
            resolve({ people: `${target_dt[0].next().text()}`, picture: pictureURL, info: info });
          }
        }
      );
    }, time * 1000);
  });
}

function goComPage(url_job_page, time) {
  return new Promise(function(resolve, reject) {
    let cp = {};
    request(
      {
        url: url_job_page,
        method: 'GET',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      (e, r, b) => {
        console.log(url_job_page);
        if (e) {
          console.log('err', e);
        }
        let $ = cheerio.load(b, { decodeEntities: false });
        $('h2').each((i, elem) => {
          if (
            $(elem)
              .text()
              .indexOf('公司簡介') !== -1
          ) {
            cp.company_brief = $(elem)
              .next()
              .text();
          } else if (
            $(elem)
              .text()
              .indexOf('主要商品') !== -1
          ) {
            cp.company_product = $(elem)
              .next()
              .text();
          }
          resolve(cp);
        });
      }
    );
  });
}

getTotalPage().then(totalPages => {
  db.query('delete from job_104;', () => {
    for (let page = 1; page <= totalPages; page++) {
      setTimeout(() => {
        getJobsFromPage(page).then(data => {
          for (let i = 0; i < data.length; i++) {
            let job_info = {};
            job_info.job_id = data[i].jobNo;
            job_info.job_name = data[i].jobNameRaw;
            job_info.salary_low = data[i].salaryLow;
            job_info.salary_high = data[i].salaryHigh;
            job_info.appear_date = data[i].appearDate;
            job_info.apply_amount = data[i].applyDesc;
            job_info.location = data[i].jobAddrNoDesc;
            // job_info.address = data[i].jobAddress;
            // job_info.job_description = data[i].description;
            job_info.company_name = data[i].custNameRaw;
            job_info.company_scale = data[i].tags[0];
            job_info.link_job = data[i].link.job.slice(2);
            job_info.link_apply_analysis = data[i].link.applyAnalyze.slice(2);
            job_info.link_company = data[i].link.cust.slice(2);
            goJobPage(`https://${job_info.link_job}`, Number(i) * 1).then(data => {
              job_info.amount = data.people;
              job_info.picture = data.picture;
              info = data.info;

              job_info.skill = info.req.tech;
              job_info.other = info.req.others;
              job_info.tool = info.req.tool;
              job_info.holiday = info.req.holiday;
              job_info.language = info.req.lang;
              job_info.industry = info.req.industry;
              job_info.degree = info.req.deg;
              job_info.work_exp = info.req.exp;
              job_info.address = info.req.address.trim().slice(0, info.req.address.trim().indexOf('地圖找工作'));
              job_info.trip = info.detail.trip;
              job_info.type = info.detail.type;
              job_info.benefit = info.benefits;
              job_info.job_description = info.desc;
              job_info.update_date = info.date;

              let info_s = JSON.stringify(info).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              goComPage(`https://${job_info.link_company}`).then(data => {
                job_info.company_brief = data.company_brief;
                job_info.company_product = data.company_product;
                db.query(
                  `INSERT INTO job_104(job_name,salary_low,salary_high,apply_amount,location,address,job_description,company_name,company_scale,link_job,link_apply_analysis,link_company,appear_date,require_amount,picture,job_id,skill,other,tool,holiday,language,industry,degree,work_exp,trip,type,benefit,update_date,company_product,company_brief)
                VALUE ('${job_info.job_name}','${job_info.salary_low}','${job_info.salary_high}','${job_info.apply_amount}','${job_info.location}','${
                    job_info.address
                  }','${job_info.job_description}','${job_info.company_name}','${job_info.company_scale}','${job_info.link_job}','${
                    job_info.link_apply_analysis
                  }','${job_info.link_company}','${job_info.appear_date}','${job_info.amount}','${job_info.picture}','${job_info.job_id}','${
                    job_info.skill
                  }','${job_info.other}','${job_info.tool}','${job_info.holiday}','${job_info.language}','${job_info.industry}','${job_info.degree}','${
                    job_info.work_exp
                  }','${job_info.trip}','${job_info.type}','${job_info.benefit}','${job_info.update_date}','${job_info.company_product}','${
                    job_info.company_brief
                  }');`,
                  (err, results) => {
                    if (err) {
                      console.log(err);
                    }
                  }
                );
              });
            });
          }
        });
      }, (page - 1) * 20000);
    }
  });
});

import React, { Component } from 'react';
import CardJob from './CardJob';
import './Contents.css';
import { connect } from 'react-redux';
import { fetch_jobs } from '../action/index';
import Pages from './Pages';
import { log } from 'util';
import default_104 from '../img/default_104.png';
import default_yourator from '../img/default_yourator.png';

class Contents extends Component {
  componentDidMount() {
    this.props.fetch_jobs({ source: 'yourator', page: 1 });
  }

  componentDidUpdate() {
    // document.getElementById('jobsContainer').scrollIntoView();
  }

  changePage = (page, source) => {
    // document.getElementById('jobsContainer').scrollIntoView();
    document.querySelector('.nav_top').scrollIntoView();

    // this.props.fetch_jobs({ page: 'pending', source: source });
    this.props.fetch_jobs({ page: page, source: source });
  };

  render() {
    if (this.props.jobs_data.jobs.job_list.length < 1) {
      return (
        <div className='contentsContainer_border'>
          <div className='jobsContainer' id='jobsContainer'>
            <div className='bouncing-loader'>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      );
    } else {
      let allJobs = [];
      let pageArea = [];
      if (this.props.jobs_data.jobs.source === 'search') {
        console.log('1111qqq', this.props.jobs_data.jobs.job_list);
        //!search yourator
        let favo_yourator = '';
        let length_favo_yourator = 0;
        let favo_104 = '';
        let length_favo_104 = 0;
        let favo_meetjobs = '';
        let length_favo_meetjobs = 0;

        if (this.props.jobs_data.jobs.job_list) {
          length_favo_yourator = this.props.jobs_data.jobs.job_list['yourator'].length;
          favo_yourator = this.props.jobs_data.jobs.job_list['yourator'].map(e => {
            return (
              <CardJob
                key={e.id}
                imgSRC={e.company_picture}
                company={e.company_name}
                jobTitle={e.job_name}
                location={e.location}
                salary={e.salary}
                description={e.skill_tag}
                jobID={e.job_id}
                source={e.job_source}
              />
            );
          });
          //!search 104
          length_favo_104 = this.props.jobs_data.jobs.job_list['104'].length;

          favo_104 = this.props.jobs_data.jobs.job_list['104'].map(e => {
            return (
              // <CardJob
              //   key={e.id}
              //   imgSRC={(e.company_picture !== 'undefined' ? e.company_picture : default_yourator) || (e.picture !== 'undefined' ? e.picture : default_104)}
              //   company={e.company_name}
              //   jobTitle={e.job_name}
              //   location={e.location}
              //   salary={e.salary}
              //   description={e.skill_tag || e.job_description}
              //   jobID={e.job_id}
              //   source={e.job_source}
              // />
              <CardJob
                key={e.id}
                imgSRC={(e.company_picture !== 'undefined' ? e.company_picture : default_yourator) || (e.picture !== 'undefined' ? e.picture : default_104)}
                company={e.company_name}
                jobTitle={e.job_name}
                location={e.location}
                salary={e.salary}
                description={e.skill_tag || e.skill || e.job_description}
                jobID={e.job_id}
                source={e.job_source}
                link_job={e.link_job}
              />
            );
          });

          //!search meetjobs
          length_favo_meetjobs = this.props.jobs_data.jobs.job_list['meetjobs'].length;
          console.log('meetjobs', this.props.jobs_data.jobs.job_list['meetjobs']);

          favo_meetjobs = this.props.jobs_data.jobs.job_list['meetjobs'].map(e => {
            return (
              <CardJob
                key={e.id}
                imgSRC={(e.company_picture !== 'undefined' ? e.company_picture : default_yourator) || (e.picture !== 'undefined' ? e.picture : default_104)}
                company={e.company_name}
                jobTitle={e.job_name}
                location={e.location}
                salary={e.salary}
                description={e.skill_tag || e.job_description}
                jobID={e.job_id}
                source={e.job_source}
              />
            );
          });

          let search_y =
            length_favo_yourator === 0 ? (
              ''
            ) : (
              <>
                <div className='search_title'>
                  <p>yourator ({length_favo_yourator})</p>
                  <div className='search_title_yourator' />
                </div>
                {favo_yourator}
              </>
            );

          let search_1 =
            length_favo_104 === 0 ? (
              ''
            ) : (
              <>
                <div className='search_title'>
                  <p>104 ({length_favo_104})</p>
                  <div className='search_title_104' />
                </div>
                {favo_104}
              </>
            );

          let search_m =
            length_favo_meetjobs === 0 ? (
              ''
            ) : (
              <>
                <div className='search_title'>
                  <p>meetjobs ({length_favo_meetjobs})</p>
                  <div className='search_title_meetjobs' />
                </div>
                {favo_meetjobs}
              </>
            );

          if (length_favo_yourator === 0 && length_favo_meetjobs === 0 && length_favo_104 === 0) {
            allJobs = <div className='search_t'>沒有符合的結果</div>;
          } else {
            allJobs = (
              <>
                {search_y}
                {search_1}
                {search_m}
              </>
            );
          }
        }
      } else {
        allJobs = this.props.jobs_data.jobs.job_list.map((e, id) => {
          return (
            <CardJob
              key={id}
              imgSRC={(e.company_picture !== 'undefined' ? e.company_picture : default_yourator) || (e.picture !== 'undefined' ? e.picture : default_104)}
              company={e.company_name}
              jobTitle={e.job_name}
              location={e.location}
              salary={e.salary}
              description={e.skill_tag || e.skill || e.job_description}
              jobID={e.job_id}
              source={e.job_source}
              link_job={e.link_job}
            />
          );
        });
        if (this.props.jobs_data.jobs.total_page <= 9) {
          for (let i = 1; i <= this.props.jobs_data.jobs.total_page; i++) {
            if (this.props.jobs_data.jobs.current_page == i) {
              pageArea.push(<Pages key={i} page={`${i}`} source={this.props.jobs_data.jobs.source} changePage={this.changePage} focus={true} />);
            } else {
              pageArea.push(<Pages key={i} page={`${i}`} source={this.props.jobs_data.jobs.source} changePage={this.changePage} focus={false} />);
            }
          }
        } else {
          for (let i = this.props.jobs_data.jobs.current_page - 4; i <= this.props.jobs_data.jobs.total_page; i++) {
            if (i > 0) {
              if (this.props.jobs_data.jobs.current_page == i) {
                pageArea.push(<Pages key={i} page={`${i}`} source={this.props.jobs_data.jobs.source} changePage={this.changePage} focus={true} />);
              } else {
                pageArea.push(<Pages key={i} page={`${i}`} source={this.props.jobs_data.jobs.source} changePage={this.changePage} focus={false} />);
              }
            }
            if (pageArea.length >= 9) {
              break;
            }
          }
        }
      }
      return (
        <div className='contentsContainer_border'>
          <div className='jobsContainer' id='jobsContainer' style={{}}>
            {allJobs}
          </div>
          <div className='page'>{pageArea}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { jobs_data: state };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { fetch_jobs: fetch_jobs }
)(Contents);

import React, { Component } from 'react';
import CardJob from './CardJob';
import './Favo.css';
import { connect } from 'react-redux';
import { fetch_jobs, update_favo } from '../action/index';
import Pages from './Pages';
import default_104 from '../img/default_104.png';
import default_yourator from '../img/default_yourator.png';

class Favo extends Component {
  componentDidMount() {
    if (this.props.favo) {
      let favo = this.props.favo;
      fetch('/favo', {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({ favo: favo }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(response => {
        console.log('rrrrr', response);
        response.json().then(e => {
          this.props.update_favo(e.data);
        });
      });
    }
  }

  componentDidUpdate() {
    if (this.props.favo_job.length === 0) {
      let favo = this.props.favo;
      fetch('/favo', {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({ favo: favo }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(response => {
        console.log('eeeee', response);
        response.json().then(e => {
          this.props.update_favo(e.data);
        });
      });
    }
  }

  changePage = (page, source) => {
    this.props.fetch_jobs({ page: page, source: source });
    document.getElementById('jobsContainer').scrollIntoView();
    // fetch
  };

  toggle_expand(e) {
    if (e.target.className.indexOf('favo_title') !== -1) {
      e.target.nextSibling.classList.toggle('favo_job_expand');
    }
  }

  render() {
    let favo_yourator = '';
    let length_favo_yourator = 0;
    if (this.props.favo_job) {
      length_favo_yourator = this.props.favo_job['yourator'].length;
      favo_yourator = this.props.favo_job['yourator'].map(e => {
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
    }

    let favo_104 = '';
    let length_favo_104 = 0;
    if (this.props.favo_job) {
      length_favo_104 = this.props.favo_job['104'].length;
      console.log('104', this.props.favo_job['104']);

      favo_104 = this.props.favo_job['104'].map(e => {
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
    }

    let favo_meetjobs = '';
    let length_favo_meetjobs = 0;
    if (this.props.favo_job) {
      length_favo_meetjobs = this.props.favo_job['meetjobs'].length;
      console.log('meetjobs', this.props.favo_job['meetjobs']);

      favo_meetjobs = this.props.favo_job['meetjobs'].map(e => {
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
    }

    return (
      <div
        className='favo_container_all'
        onClick={e => {
          this.toggle_expand(e);
          console.log(e);
        }}
      >
        <div className='favo_yourator_container favo_container'>
          <div className='favo_title'>
            <p>yourator ({length_favo_yourator})</p>
            <div className='favo_title_yourator' />
          </div>
          <div className='favo_job favo_job_expand'>{favo_yourator} </div>
        </div>
        <div className='favo_104_container favo_container'>
          <div className='favo_title'>
            <p>104 ({length_favo_104})</p>
            <div className='favo_title_104' />
          </div>
          <div className='favo_job favo_job_expand'>{favo_104}</div>
        </div>
        <div className='favo_meetjobs_container favo_container'>
          <div className='favo_title'>
            <p>meetjobs ({length_favo_meetjobs})</p>
            <div className='favo_title_meetjobs' />
          </div>
          <div className='favo_job favo_job_expand'>{favo_meetjobs} </div>
        </div>
      </div>
    );
  }

  // render() {
  //   if (this.props.jobs_data.jobs.job_list.length < 1) {
  //     return (
  //       <>
  //         <div className='jobsContainer' id='jobsContainer' style={{}}>
  //           <div>loading</div>
  //         </div>
  //       </>
  //     );
  //   } else {
  //     let allJobs = this.props.jobs_data.jobs.job_list.map((e, id) => {
  //       return (
  //         <CardJob
  //           key={id}
  //           imgSRC={e.company_picture}
  //           company={e.company_name}
  //           jobTitle={e.job_name}
  //           location={e.location}
  //           salary={e.salary}
  //           description={e.skill_tag}
  //           jobID={e.job_id}
  //           source={e.job_source}
  //         />
  //       );
  //     });
  //     let pageArea = [];
  //     for (let i = 1; i <= this.props.jobs_data.jobs.total_page; i++) {
  //       if (this.props.jobs_data.jobs.current_page == i) {
  //         pageArea.push(
  //           <Pages
  //             key={i}
  //             page={`${i}`}
  //             source={this.props.jobs_data.jobs.source}
  //             changePage={this.changePage}
  //             focus={true}
  //           />
  //         );
  //       } else {
  //         pageArea.push(
  //           <Pages
  //             key={i}
  //             page={`${i}`}
  //             source={this.props.jobs_data.jobs.source}
  //             changePage={this.changePage}
  //             focus={false}
  //           />
  //         );
  //       }
  //     }
  //     return (
  //       <>
  //         <div
  //           className='jobsContainer'
  //           id='jobsContainer'
  //           style={{ backgroundColor: '#ffffff', display: 'flex', flexWrap: 'wrap' }}
  //         >
  //           {allJobs}
  //         </div>
  //         <div className='page'>{pageArea}</div>
  //       </>
  //     );
  //   }
  // }
}

const mapStateToProps = state => {
  return { favo: state.user_status.favorite_job, favo_job: state.favo_job };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { fetch_jobs: fetch_jobs, update_favo: update_favo }
)(Favo);

import React, { Component } from 'react';
import CardJob from './CardJob';
import './Contents.css';
import { connect } from 'react-redux';
import { fetch_jobs } from '../action/index';
import Pages from './Pages';
import { log } from 'util';

class Contents extends Component {
  componentDidMount() {
    this.props.fetch_jobs({ source: 'yourator', page: 1 });
  }

  componentDidUpdate() {
    // document.getElementById('jobsContainer').scrollIntoView();
  }

  changePage = (page, source) => {
    this.props.fetch_jobs({ page: page, source: source });
    document.getElementById('jobsContainer').scrollIntoView();
  };

  render() {
    if (this.props.jobs_data.jobs.job_list.length < 1) {
      return (
        <>
          <div className='jobsContainer' id='jobsContainer' style={{}}>
            <div>loading</div>
          </div>
        </>
      );
    } else {
      let allJobs = this.props.jobs_data.jobs.job_list.map((e, id) => {
        return (
          <CardJob
            key={id}
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
      let pageArea = [];
      for (let i = 1; i <= this.props.jobs_data.jobs.total_page; i++) {
        if (this.props.jobs_data.jobs.current_page == i) {
          pageArea.push(
            <Pages
              key={i}
              page={`${i}`}
              source={this.props.jobs_data.jobs.source}
              changePage={this.changePage}
              focus={true}
            />
          );
        } else {
          pageArea.push(
            <Pages
              key={i}
              page={`${i}`}
              source={this.props.jobs_data.jobs.source}
              changePage={this.changePage}
              focus={false}
            />
          );
        }
      }
      return (
        <>
          <div
            className='jobsContainer'
            id='jobsContainer'
            style={{ backgroundColor: '#ffffff', display: 'flex', flexWrap: 'wrap' }}
          >
            {allJobs}
          </div>
          <div className='page'>{pageArea}</div>
        </>
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

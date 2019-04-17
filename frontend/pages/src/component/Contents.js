import React, { Component } from 'react';
import CardJob from './CardJob';
import './Contents.css';
import { connect } from 'react-redux';
import { fetch_yourator } from '../action/index';
import Pages from './Pages';

class Contents extends Component {
  componentDidMount() {
    this.props.fetch_yourator(1);
  }

  render() {
    if (!this.props.jobs.yourator) {
      return <div>loading</div>;
      // cardJobAll = this.props.jobs.yourator.map(e => {});
    } else {
      let allJobs = this.props.jobs.yourator.job_list.map(e => {
        return (
          <CardJob
            key={e.id}
            imgSRC={e.company_picture}
            company={e.company_name}
            jobTitle={e.job_name}
            location={e.location}
            salary={e.salary}
            description={e.skill_tag}
          />
        );
      });
      let pageArea = [];
      for (let i = 0; i < this.props.jobs.yourator.total_page; i++) {
        pageArea.push(<Pages page={`${i + 1}`} changePage={this.props.fetch_yourator} />);
      }

      return (
        <>
          <div className='jobsContainer' style={{ backgroundColor: '#ffffff', display: 'flex', flexWrap: 'wrap' }}>
            {allJobs}
          </div>
          <div className='page'>{pageArea}</div>
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return { jobs: state };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { fetch_yourator: fetch_yourator }
)(Contents);

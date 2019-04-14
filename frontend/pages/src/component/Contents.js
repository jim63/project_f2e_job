import React, { Component } from 'react';
import CardJob from './CardJob';
import './Contents.css';
import { connect } from 'react-redux';
import { fetch_yourator } from '../action/index';
import Pages from './Pages';

class Contents extends Component {
  componentDidMount() {
    this.props.fetch_yourator(3);
  }

  render() {
    if (!this.props.jobs.yourator) {
      return <div>loading</div>;
      // cardJobAll = this.props.jobs.yourator.map(e => {});
    } else {
      let allJobs = this.props.jobs.yourator.map(e => {
        console.log(e);
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
      console.log('qq', allJobs);

      return (
        <>
          <div className='jobsContainer' style={{ backgroundColor: '#ffffff', display: 'flex', flexWrap: 'wrap' }}>
            {allJobs}
          </div>
          <div className='Page'>
            <Pages page='1' changePage={this.props.fetch_yourator} />
            <Pages page='2' changePage={this.props.fetch_yourator} />
            <Pages page='3' changePage={this.props.fetch_yourator} />
            <Pages page='4' changePage={this.props.fetch_yourator} />
            <Pages page='5' changePage={this.props.fetch_yourator} />
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return { jobs: state };
};

// export default Banner;

export default connect(
  mapStateToProps,
  { fetch_yourator: fetch_yourator }
)(Contents);

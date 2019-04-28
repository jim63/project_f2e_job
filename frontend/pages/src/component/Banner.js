import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_jobs, login_check_success, login_check_fail } from '../action/index';
import Logout from './Logout';
// import './Banner.css';
import banner from '../img/banner-18.png';

class Banner extends Component {
  render() {
    let top_right;
    if (this.props.user_status.status === 'login') {
      top_right = <Logout />;
    }
    return (
      <div className='banner' style={{ backgroundImage: `url(${banner})` }}>
        {top_right}
        <div className='bannerText' style={{}}>
          <p>WORK LIFE BALANCE</p>
          <p>ARE YOU READY?</p>
        </div>
      </div>
    );
  }
}

// export default Banner;

const mapStateToProps = state => {
  return { jobs_data: state.jobs, user_status: state.user_status };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { fetch_jobs: fetch_jobs, login_check_success: login_check_success, login_check_fail: login_check_fail }
)(Banner);

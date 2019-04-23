import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_jobs, login_check_success, login_check_fail } from '../action/index';
import Logout from './Logout';
import './Banner_favo.css';
import banner from '../img/banner-18.png';
import banner2 from '../img/banner2.jpeg';

class Banner extends Component {
  componentDidMount() {
    setInterval(() => {
      let banner = document.querySelectorAll('.banner_control');
      banner.forEach(ele => {
        ele.classList.toggle('current_banner');
        ele.classList.toggle('not_current_banner');
      });
    }, 10000);
  }

  render() {
    let top_right;
    if (this.props.user_status.status === 'login') {
      top_right = <Logout />;
    }

    let banner_condition = (
      <div className='banner_container'>
        {top_right}
        <div style={{ position: 'relative' }}>
          <div className='current_banner banner_control'>
            <div className='banner'>
              <img
                src={banner}
                className='banner_ani_2'
                style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
              />
              <div className='bannerText'>
                <p>WORK LIFE BALANCE</p>
                <p>ARE YOU READY?</p>
              </div>
            </div>
          </div>
          <div className='not_current_banner banner_control'>
            <div className='banner'>
              <img
                src={banner2}
                className='banner_ani_2'
                style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
              />
              <div className='bannerText' style={{ color: 'white' }}>
                <p>STUCK IN LIFE </p>
                <p>OR</p>
                <p>STUCK IN EVENT-LOOP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return <>{banner_condition}</>;
  }
}

const mapStateToProps = state => {
  return { jobs_data: state.jobs, user_status: state.user_status, banner_status: state.banner_status };
};

export default connect(
  mapStateToProps,
  {
    fetch_jobs: fetch_jobs,
    login_check_success: login_check_success,
    login_check_fail: login_check_fail
  }
)(Banner);

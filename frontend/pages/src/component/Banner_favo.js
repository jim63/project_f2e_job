import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_jobs, login_check_success, login_check_fail, change_banner, change_banner_default } from '../action/index';
import Logout from './Logout';
import './Banner_favo.css';
// import banner from '../img/banner-18.png';
// import banner2 from '../img/banner2.jpeg';
// import banner3 from '../img/banner3.jpeg';

class Banner extends Component {
  banner_ref = [];

  banner_change = () => {
    this.props.change_banner();
    let banner_status = this.props.banner_status;

    this.banner_ref.forEach(ele => {
      ele.classList.remove('default_banner');
      ele.classList.remove('not_default_banner');
      if (ele.className.indexOf(banner_status + 1) !== -1) {
        ele.classList.toggle('current_banner');
        ele.classList.toggle('not_current_banner');
      } else if (ele.className.indexOf(((banner_status + 1) % 3) + 1) !== -1) {
        ele.classList.toggle('current_banner');
        ele.classList.toggle('not_current_banner');
      }
    });
  };

  componentDidMount() {
    this.interval1 = setInterval(this.banner_change, 7000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval1);
    this.props.change_banner_default();
  }

  render() {
    let banner_condition = (
      <div className='banner_container'>
        <div style={{ position: 'relative' }}>
          <div className='current_banner banner_control default_banner banner_1' ref={banner => (this.banner_ref[0] = banner)}>
            <div className='banner'>
              <img src={`https://s3-ap-southeast-1.amazonaws.com/f2ejobs/f2e_pics/banner-18.png`} className='banner_ani_2' style={{ width: '100%', height: 'auto', overflow: 'hidden' }} />
              <div className='bannerText'>
                <p>WORK LIFE BALANCE</p>
                <p>ARE YOU READY?</p>
              </div>
            </div>
          </div>
          <div className='not_current_banner banner_control not_default_banner banner_2' ref={banner => (this.banner_ref[1] = banner)}>
            <div className='banner'>
              <img src={`https://s3-ap-southeast-1.amazonaws.com/f2ejobs/f2e_pics/banner2.jpeg`} className='banner_ani_2' style={{ width: '100%', height: 'auto', overflow: 'hidden', opacity: '0.8' }} />
              <div className='bannerText' style={{ color: 'white', textShadow: '2px 2px #443a42' }}>
                <p>STUCK IN LIFE </p>
                <p>OR</p>
                <p>STUCK IN EVENT-LOOP</p>
              </div>
            </div>
          </div>
          <div className='not_current_banner banner_control not_default_banner banner_3' ref={banner => (this.banner_ref[2] = banner)}>
            <div className='banner'>
              <img src={`https://s3-ap-southeast-1.amazonaws.com/f2ejobs/f2e_pics/banner3.jpeg`} className='banner_ani_2' style={{ width: '100%', height: 'auto', overflow: 'hidden', opacity: '0.7' }} />
              <div className='bannerText' style={{ color: 'rgba(255,0,0,0.7)', textShadow: '1px 1px #443a42' }}>
                <p>Java is to JavaScript what Car is to Carpet.</p>
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
    login_check_fail: login_check_fail,
    change_banner: change_banner,
    change_banner_default: change_banner_default
  }
)(Banner);

import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Contents from './component/Contents';
import Footer from './component/Footer';
import Login from './component/Login';
import Logout from './component/Logout';
import Favo from './component/Favo';
import Banner_favo from './component/Banner_favo';
import { connect } from 'react-redux';
import { fetch_jobs, login_check_success, login_check_fail } from './action/index';

class App extends Component {
  logo_click = e => {
    if (window.location.href.indexOf('favo') === -1) {
      if (this.props.user_status.status === 'login') {
        if (
          e.target.className.indexOf('welcome_button') == -1 &&
          e.target.className.indexOf('log_out_container') == -1 &&
          // e.target.className.indexOf('check_favorite') == -1 &&
          e.target.className.indexOf('logout_check') == -1
        ) {
          document.querySelector('.log_out_container').classList.add('log_out_container_disappear');
        }
      }

      if (e.target.className.indexOf('current_logo') !== -1 && e.target.className.indexOf('not_current_logo') === -1) {
        let not_current_logo = document.querySelectorAll('.not_current_logo');
        not_current_logo.forEach(e => {
          e.classList.toggle('down_to_buttom');
        });
      } else if (e.target.className.indexOf('yourator') !== -1) {
        this.props.fetch_jobs({ page: 1, source: 'yourator' });
        document.getElementById('jobsContainer').scrollIntoView();
      } else if (e.target.className.indexOf('104') !== -1) {
        this.props.fetch_jobs({ page: 1, source: '104' });
        document.getElementById('jobsContainer').scrollIntoView();
      } else if (e.target.className.indexOf('meetjobs') !== -1) {
        this.props.fetch_jobs({ page: 1, source: 'meetjobs' });
        document.getElementById('jobsContainer').scrollIntoView();
      } else {
        let not_current_logo = document.querySelectorAll('.not_current_logo');
        not_current_logo.forEach(e => {
          if (e.className.indexOf('down_to_buttom') == -1) {
            e.classList.toggle('down_to_buttom');
          }
        });
        if (e.target.className.indexOf('login_button') != -1) {
          document.querySelector('.login_background').style.display = 'flex';
        } else if (e.target.className.indexOf('login_background') != -1) {
          document.querySelector('.login_background').style.display = 'none';
          document.querySelector('.password_alert').style.visibility = 'hidden';
          document.querySelector('.email_alert').style.visibility = 'hidden';
          document.querySelector('#email_login').value = '';
        }
      }
    } else {
      if (this.props.user_status.status === 'login') {
        if (
          e.target.className.indexOf('welcome_button') === -1 &&
          e.target.className.indexOf('log_out_container') === -1 &&
          // e.target.className.indexOf('check_favorite') == -1 &&
          e.target.className.indexOf('logout_check') === -1
        ) {
          document.querySelector('.log_out_container').classList.add('log_out_container_disappear');
        }
      }
    }
  };

  componentDidMount() {
    function getCookie(name) {
      var value = '; ' + document.cookie;
      var parts = value.split('; ' + name + '=');
      if (parts.length === 2)
        return parts
          .pop()
          .split(';')
          .shift();
    }
    let session_id = getCookie('session_id');
    console.log('cooke', session_id);
    if (session_id) {
      fetch('http://localhost:3006/checkSessionID', {
        credentials: 'include',
        method: 'POST', // or 'PUT'
        body: JSON.stringify({ session_id: session_id }), // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(response => {
        response.json().then(e => {
          if (e.result === 'found') {
            this.props.login_check_success({
              status: 'login',
              email: e.email,
              name: e.name,
              favorite_job: e.favorite_job || { 104: [], yourator: [], meetjobs: [] },
              session_id: session_id
            });
          } else {
            this.props.login_check_fail();
          }
        });
      });
    }
  }

  render() {
    let top_right;
    if (this.props.user_status.status === 'unknown') {
      top_right = <Login />;
    }
    return (
      <div onClick={this.logo_click} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {top_right}
        <div className='react_container'>
          <Header />
          <Banner_favo />
          <div className='contentsContainer' style={{}}>
            <Route path='/' exact component={Nav} />
            <Route path='/' exact component={Contents} />
            <Route path='/favo' component={Favo} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { jobs_data: state.jobs, user_status: state.user_status };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { fetch_jobs: fetch_jobs, login_check_success: login_check_success, login_check_fail: login_check_fail }
)(App);

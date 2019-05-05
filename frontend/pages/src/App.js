import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header';
import Banner from './component/Banner';
import Nav from './component/Nav';
import NavTop from './component/NavTop';
import Contents from './component/Contents';
import Footer from './component/Footer';
import Login from './component/Login';
import Logout from './component/Logout';
import Favo from './component/Favo';
import Detail from './component/Detail';
import Banner_favo from './component/Banner_favo';
import { connect } from 'react-redux';
import { fetch_jobs, login_check_success, login_check_fail } from './action/index';
import './main.css';
class App extends Component {
  logo_click = e => {
    if (window.location.href.indexOf('favo') === -1 && window.location.href.indexOf('jobs') === -1) {
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
      if (e.target.className.indexOf('nav_top_yourator') !== -1) {
        // this.props.fetch_jobs({ page: 'pending', source: 'yourator' });
        this.props.fetch_jobs({ page: 1, source: 'yourator' });
        // document.getElementById('jobsContainer').scrollIntoView();
        document.querySelector('.nav_top').scrollIntoView();
      } else if (e.target.className.indexOf('nav_top_104') !== -1) {
        // this.props.fetch_jobs({ page: 'pending', source: '104' });
        this.props.fetch_jobs({ page: 1, source: '104' });
        // document.getElementById('jobsContainer').scrollIntoView();
        document.querySelector('.nav_top').scrollIntoView();
      } else if (e.target.className.indexOf('nav_top_meetjobs') !== -1) {
        // this.props.fetch_jobs({ page: 'pending', source: 'meetjobs' });
        this.props.fetch_jobs({ page: 1, source: 'meetjobs' });
        // document.getElementById('jobsContainer').scrollIntoView();
        document.querySelector('.nav_top').scrollIntoView();
      } else if (e.target.className.indexOf('nav_top_search') !== -1) {
        this.props.fetch_jobs({ page: 'pending', source: 'search' });
      } else {
        // let not_current_logo = document.querySelectorAll('.not_current_logo');
        // not_current_logo.forEach(e => {
        //   if (e.className.indexOf('down_to_buttom') == -1) {
        //     e.classList.toggle('down_to_buttom');
        //   }
        // });
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
      fetch('/checkSessionID', {
        // fetch('http://localhost:80/checkSessionID', {
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
        <Header />
        <Route path='/' exact component={Banner_favo} />
        <Route path='/' exact component={NavTop} />
        <div className='react_container'>
          <div className='contentsContainer'>
            <Route
              path='/jobs/:source/:id'
              component={({ match }) => {
                return <Detail source={match.params.source} id={match.params.id} loading={true} />;
              }}
            />
            {/* <Route path='/' exact component={Nav} /> */}
            <Route path='/' exact component={Contents} />
            <Route path='/favo' component={Favo} />
          </div>
        </div>
        <Footer />
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

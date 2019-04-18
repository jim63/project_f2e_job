import React, { Component } from 'react';
// import logo from './logo.svg';
import { HashRouter, Route } from 'react-router-dom';
import Header from './component/Header';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Contents from './component/Contents';
import Footer from './component/Footer';
import { connect } from 'react-redux';
import { fetch_jobs } from './action/index';

class App extends Component {
  logo_click = e => {
    console.log(e.target.className);
    if (e.target.className.indexOf('current_logo') != -1 && e.target.className.indexOf('not_current_logo') == -1) {
      let not_current_logo = document.querySelectorAll('.not_current_logo');
      not_current_logo.forEach(e => {
        e.classList.toggle('down_to_buttom');
      });
    } else if (e.target.className.indexOf('yourator') != -1) {
      this.props.fetch_jobs({ page: 1, source: 'yourator' });
    } else if (e.target.className.indexOf('104') != -1) {
      this.props.fetch_jobs({ page: 1, source: '104' });
    } else if (e.target.className.indexOf('meetjobs') != -1) {
      console.log('meetjobs', e.target.className);
    } else {
      let not_current_logo = document.querySelectorAll('.not_current_logo');
      not_current_logo.forEach(e => {
        if (e.className.indexOf('down_to_buttom') == -1) {
          e.classList.toggle('down_to_buttom');
        }
      });
    }
  };

  render() {
    return (
      // <div onClick={this.logo_click}>
      <div onClick={this.logo_click} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Banner />
        <div className='contentsContainer' style={{}}>
          <Nav />
          <Contents />
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { jobs_data: state.jobs };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { fetch_jobs: fetch_jobs }
)(App);

import React, { Component } from 'react';
import './Banner.css';
import logo from '../img/logo.png';

class Banner extends Component {
  render() {
    return (
      <nav className='banner' style={{}}>
        {/* <img className='bannerLogo' srcSet='../img/logo.jpg' width='600px' height='300px' alt='' srcset='' /> */}
        <img className='bannerLogo' srcSet={logo} />
        <div className='bannerText' style={{}}>
          <p>WORK LIFE BALANCE</p>
          <p>ARE YOU READY?</p>
        </div>
      </nav>
    );
  }
}
export default Banner;

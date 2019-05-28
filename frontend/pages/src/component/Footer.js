import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// let logo = require('../img/logo-2.svg');

class Footer extends Component {
  render() {
    return (
      <footer className='footer' style={{}}>
        <img src={`https://s3-ap-southeast-1.amazonaws.com/f2ejobs/f2e_pics/logo-2.svg`} alt='' width='50px' />
        <p>©2019 ALL RIGHT RESERVED. </p>
      </footer>
    );
  }
}
export default Footer;

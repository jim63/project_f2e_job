import React, { Component } from 'react';
import './Footer.css';
let logo = require('../img/logo-2.svg');

class Footer extends Component {
  render() {
    return (
      <footer className='footer' style={{}}>
        <img src={logo} alt='' width='50px' />
        <p>©2019 ALL RIGHT RESERVED. </p>
      </footer>
    );
  }
}
export default Footer;

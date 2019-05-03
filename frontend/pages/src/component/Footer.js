import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
let logo = require('../img/logo-2.svg');

class Footer extends Component {
  render() {
    return (
      <Link to='/jobs/104/11007547'>
        <footer className='footer' style={{}}>
          <img src={logo} alt='' width='50px' />
          <p>©2019 ALL RIGHT RESERVED. </p>
        </footer>
      </Link>
    );
  }
}
export default Footer;

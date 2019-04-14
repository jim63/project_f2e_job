import React, { Component } from 'react';
import './Header.css';
import logo from '../img/logo-1.svg';

class Header extends Component {
  render() {
    return (
      <header className='header' style={{}}>
        <div className='header_logo' style={{}}>
          <img className='header_logo_img' src={logo} alt='' />
        </div>
      </header>
    );
  }
}
export default Header;

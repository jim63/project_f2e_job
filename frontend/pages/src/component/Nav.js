import React, { Component } from 'react';
import ButtonCompany from '../component/ButtonCompany';

import './Nav.css';

class Header extends Component {
  render() {
    return (
      <nav className='navbar' style={{}}>
        <ButtonCompany company='104' />
        <ButtonCompany company='yourator' />
        <ButtonCompany company='meet.job' />
        <ButtonCompany company='wanted' />
        <ButtonCompany company='cake resume' />
      </nav>
    );
  }
}
export default Header;

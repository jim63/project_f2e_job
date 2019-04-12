import React, { Component } from 'react';

import './ButtonCompany.css';
class ButtonCompany extends Component {
  //!test
  redirect = () => {
    window.location.href = 'http://stackoverflow.com';
  };

  render() {
    return (
      <div className='buttonCompany' style={{}} onClick={this.redirect}>
        <p className='buttonCompanyText' style={{ display: 'block', lineHeight: '50px' }}>
          {this.props.company}
        </p>
      </div>
    );
  }
}
export default ButtonCompany;

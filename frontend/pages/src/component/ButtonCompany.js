import React, { Component } from 'react';

import './ButtonCompany.css';
class ButtonCompany extends Component {
  render() {
    return (
      <div
        className={`buttonCompanyContainer${
          this.props.current_logo == undefined ? ' not_current_logo' : ` ${this.props.current_logo}`
        } ${this.props.className} down_to_buttom`}
      >
        <img src={this.props.imgSRC} className={`logo`} style={{ pointerEvents: 'none' }} />
      </div>
    );
  }
}
export default ButtonCompany;

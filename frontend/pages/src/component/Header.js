import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import logo from '../img/logo-1.svg';

class Header extends Component {
  render() {
    let loggin_block;
    if (this.props.login_status == 0) {
      loggin_block = (
        <div className='login_button'>
          <p style={{ pointerEvents: 'none' }}>登入</p>{' '}
        </div>
      );
    }

    return (
      <header className='header' style={{}}>
        <div className='header_logo' style={{}}>
          <img className='header_logo_img' src={logo} alt='' />
        </div>
        {loggin_block}
      </header>
    );
  }
}
const mapStateToProps = state => {
  return { login_status: state.login_status };
};

// export default Contents;

export default connect(
  mapStateToProps,
  {}
)(Header);

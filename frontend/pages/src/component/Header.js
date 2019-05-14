import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../img/logo-1.svg';
import Logout from './Logout';

class Header extends Component {
  welcome_button_click = () => {
    document.querySelector('.log_out_container').style.display = 'block';
    document.querySelector('.log_out_container').classList.toggle('log_out_container_disappear');
  };

  render() {
    let top_right;
    if (this.props.user_status.status === 'login') {
      top_right = <Logout ref={this.props.log_out_container} />;
    }

    let login_block;
    if (this.props.user_status.status === 'unknown') {
      login_block = (
        <div className='login_button'>
          <p style={{ pointerEvents: 'none' }}>登入</p>{' '}
        </div>
      );
    } else if (this.props.user_status.status === 'login') {
      login_block = (
        <div className='welcome_button' onClick={this.welcome_button_click}>
          <p style={{ pointerEvents: 'none' }}>hello, {this.props.user_status.name}</p>
        </div>
      );
    }

    return (
      <header className='header'>
        <Link to='/' className='link_home'>
          <span className='header_logo'>
            <img className='header_logo_img' src={logo} alt='' />
          </span>
        </Link>
        {login_block}
        {top_right}
      </header>
    );
  }
}
const mapStateToProps = state => {
  return { user_status: state.user_status };
};

// export default Contents;

export default connect(
  mapStateToProps,
  {}
)(Header);

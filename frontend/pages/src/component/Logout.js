import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, fetch_jobs } from '../action';
import { Link } from 'react-router-dom';

import './Logout.css';

class Logout extends Component {
  logout_button_click = () => {
    let session_id = this.props.login_status.session_id;

    fetch('/logout', {
      credentials: 'include',
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ session_id: session_id }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      response.json().then(e => {
        if (e.result === 'success') {
          this.props.logout();
        }
      });
    });
    document.cookie = 'session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.alert('登出成功');
    window.location = '/';
  };

  render() {
    return (
      <div className='log_out_container log_out_container_disappear'>
        <Link to='/favo' className='check_favorite_div'>
          <div className='check_favorite'>查看收藏</div>
        </Link>
        <div className='logout_check' onClick={this.logout_button_click}>
          登出
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { login_status: state.user_status };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { logout: logout }
)(Logout);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login_check_success } from '../action';

import './Login.css';

class Login extends Component {
  sign_change = e => {
    if (e.target.className.indexOf('login_bottom_text') != -1) {
      document.querySelector('.login_prompt').style.display = 'none';
      document.querySelector('.signup_prompt').style.display = 'flex';
    } else if (e.target.className.indexOf('signup_bottom_text') != -1) {
      document.querySelector('.login_prompt').style.display = 'flex';
      document.querySelector('.signup_prompt').style.display = 'none';
    }
  };

  login_submit = e => {
    e.preventDefault();
    let email = document.querySelector('#email_login').value;
    let password = document.querySelector('#password_login').value;
    fetch('http://localhost:3306/signIn', {
      credentials: 'include',
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ email: email, password: password }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      response.json().then(e => {
        console.log(e.signIn);
        document.querySelector('#password_login').value = '';
        if (e.signIn == 'wrong_password') {
          document.querySelector('.password_alert').style.visibility = 'visible';
        } else if (e.signIn == 'email_not_found') {
          document.querySelector('.email_alert').style.visibility = 'visible';
        } else if (e.signIn == 'success') {
          console.log('sign', e);
          this.props.login_check_success({
            status: 'login',
            email: e.email,
            name: e.name,
            favorite_job: JSON.parse(e.favorite_job)
          });
          window.alert('登入成功');
        }
      });
    });
  };

  hidden_email_alert = () => {
    document.querySelector('.email_alert').style.visibility = 'hidden';
  };

  hidden_password_alert = () => {
    document.querySelector('.password_alert').style.visibility = 'hidden';
  };

  render() {
    let login_message;

    return (
      <div className='login_background' onClick={this.sign_change}>
        <div className='login_prompt'>
          <div className='login_prompt_container'>
            <form onSubmit={this.login_submit}>
              <label htmlFor='email_login'>E-mail</label>
              <br />
              <input
                type='email'
                id='email_login'
                placeholder='jim123@gmail.com'
                required
                onChange={this.hidden_email_alert}
              />
              <p className='email_alert'>email 尚未註冊</p>
              <br />
              <label htmlFor='password_login'>Password</label>
              <br />
              <input
                type='password'
                id='password_login'
                placeholder='●●●●●●●●'
                required
                minLength='4'
                maxLength='16'
                onChange={this.hidden_password_alert}
              />
              <p className='password_alert'>密碼錯誤，請重新輸入</p>
              <br />
              <button type='submit' className='login_submit'>
                登入
              </button>
              <br />
            </form>
          </div>
          <div className='login_bottom_text'>
            <p>還沒有帳號？按這裡註冊</p>
          </div>
        </div>
        <div className='signup_prompt'>
          <div className='signup_prompt_container'>
            <form>
              <label htmlFor='name_signup'>Name</label>
              <br />
              <input type='name' id='name_signup' placeholder='jimjim' required minLength='4' maxLength='16' />
              <br />
              <label htmlFor='email_signup'>E-mail</label>
              <br />
              <input type='email' id='email_signup' placeholder='jim123@gmail.com' required />
              <br />
              <label htmlFor='password_signup'>Password</label>
              <br />
              <input
                type='password'
                id='password_signup'
                placeholder='●●●●●●●●'
                required
                minLength='4'
                maxLength='16'
              />
              <br />
              <button type='submit' className='signup_submit'>
                註冊
              </button>
              <br />
            </form>
          </div>
          <div className='signup_bottom_text' onClick={this.sign_change}>
            <p>已經有帳號？按這裡登入</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { login_status: state.login_status };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { login_check_success: login_check_success }
)(Login);

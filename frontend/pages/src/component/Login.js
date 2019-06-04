import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login_check_success, change_login_prompt_status } from '../action';

import './Login.css';

class Login extends Component {
  state = {
    login_propmt: 'none'
  };

  password_login = React.createRef();
  email_login = React.createRef();
  password_alert = React.createRef();
  email_alert = React.createRef();
  name_signup = React.createRef();
  email_signup = React.createRef();
  password_signup = React.createRef();

  sign_change = e => {
    if (e.target.className.indexOf('login_bottom_text') != -1) {
      this.props.change_login_prompt_status('signup_prompt');
    } else if (e.target.className.indexOf('signup_bottom_text') != -1) {
      this.props.change_login_prompt_status('login_prompt');
    }
  };

  login_submit = e => {
    e.preventDefault();

    let email = this.email_login.current.value;
    let password = this.password_login.current.value;

    fetch('/signIn', {
      credentials: 'include',
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ email: email, password: password }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      response.json().then(e => {
        this.password_login.current.value = '';
        if (e.signIn == 'wrong_password') {
          this.password_alert.current.style.visibility = 'visible';
        } else if (e.signIn == 'email_not_found') {
          this.email_alert.current.style.visibility = 'visible';
        } else if (e.signIn == 'success') {
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

  signup_submit = e => {
    e.preventDefault();

    let name = this.name_signup.current.value;
    let email = this.email_signup.current.value;
    let password = this.password_signup.current.value;
    fetch('/signup', {
      credentials: 'include',
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ name: name, email: email, password: password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      response.json().then(e => {
        this.password_login.current.value = '';
        if (e.signUp === 'already_singUp') {
          this.password_alert.current.style.visibility = 'visible';
        } else if (e.signUp == 'success') {
          function getCookie(name) {
            var value = '; ' + document.cookie;
            var parts = value.split('; ' + name + '=');
            if (parts.length === 2)
              return parts
                .pop()
                .split(';')
                .shift();
          }
          let session_id = getCookie('session_id');
          if (session_id) {
            fetch('/checkSessionID', {
              // fetch('http://localhost:80/checkSessionID', {
              credentials: 'include',
              method: 'POST', // or 'PUT'
              body: JSON.stringify({ session_id: session_id }), // data can be `string` or {object}!
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(response => {
              response.json().then(e => {
                if (e.result === 'found') {
                  this.props.login_check_success({
                    status: 'login',
                    email: e.email,
                    name: e.name,
                    favorite_job: e.favorite_job,
                    session_id: session_id
                  });
                  window.alert('註冊成功');
                }
              });
            });
          }
        } else {
          window.alert(e.signUp);
        }
      });
    });
  };

  hidden_email_alert = () => {
    this.email_alert.current.style.visibility = 'hidden';
  };

  hidden_password_alert = () => {
    this.password_alert.current.style.visibility = 'hidden';
  };

  render() {
    let login_message;

    return (
      <div className={this.props.login_prompt === 'none' ? 'login_background' : 'login_background login_background_show'} onClick={this.sign_change}>
        <div className={this.props.login_prompt === 'login_prompt' ? 'login_prompt login_prompt_show' : 'login_prompt login_prompt_hide'}>
          <div className='login_prompt_container'>
            <form onSubmit={this.login_submit}>
              <label htmlFor='email_login'>E-mail</label>
              <br />
              <input type='email' id='email_login' ref={this.email_login} placeholder='jim123@gmail.com' required onChange={this.hidden_email_alert} />
              <p className='email_alert' ref={this.email_alert}>
                email 尚未註冊
              </p>
              <br />
              <label htmlFor='password_login'>Password</label>
              <br />
              <input
                type='password'
                id='password_login'
                ref={this.password_login}
                placeholder='●●●●●●●●'
                required
                minLength='4'
                maxLength='16'
                onChange={this.hidden_password_alert}
              />
              <p className='password_alert' ref={this.password_alert}>
                密碼錯誤，請重新輸入
              </p>
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
        <div className={this.props.login_prompt === 'signup_prompt' ? 'signup_prompt signup_prompt_show' : 'signup_prompt'}>
          <div className='signup_prompt_container'>
            <form onSubmit={this.signup_submit}>
              <label htmlFor='name_signup'>Name</label>
              <br />
              <input type='name' id='name_signup' ref={this.name_signup} placeholder='jimjim' required minLength='4' maxLength='16' />
              <br />
              <label htmlFor='email_signup'>E-mail</label>
              <br />
              <input type='email' id='email_signup' ref={this.email_signup} placeholder='jim123@gmail.com' required />
              <br />
              <label htmlFor='password_signup'>Password</label>
              <br />
              <input type='password' id='password_signup' ref={this.password_signup} placeholder='●●●●●●●●' required minLength='4' maxLength='16' />
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
  return { login_prompt: state.login_prompt };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { login_check_success: login_check_success, change_login_prompt_status: change_login_prompt_status }
)(Login);

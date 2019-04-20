import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        if (e.signIn == 'wrong_password') {
          // login_message = 6;
        }
      });
    });
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
              <input type='email' id='email_login' placeholder='jim123@gmail.com' required />
              <p className='email_alert'>此 email 尚未註冊</p>
              <br />
              <label htmlFor='password_login'>Password</label>
              <br />
              <input type='password' id='password_login' placeholder='●●●●●●●●' required minlength='4' maxlength='16' />
              <p className='password_alert'>密碼錯誤</p>
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
              <input type='name' id='name_signup' placeholder='jimjim' required />
              <br />
              <label htmlFor='email_signup'>E-mail</label>
              <br />
              <input type='email' id='email_signup' placeholder='jim123@gmail.com' required />
              <br />
              <label htmlFor='password_signup'>Password</label>
              <br />
              <input type='password' id='password_signup' placeholder='●●●●●●●●' required />
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
  {}
)(Login);

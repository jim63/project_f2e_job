import React, { Component } from 'react';
import ButtonCompany from '../component/ButtonCompany';
import './NavTop.css';
import { connect } from 'react-redux';
import { log } from 'util';
import { fetch_jobs } from '../action';

let logo_yourator = require('../img/youratorlogo.png');
let logo_104 = require('../img/104logo.png');
let logo_meetjobs = require('../img/meetjobslogo.svg');

class Nav extends Component {
  nav_search_click = () => {
    document.querySelector('.nav_top_search_t').style.display = 'none';
    document.querySelector('.nav_top_search_input').style.display = 'block';
    document.querySelector('.nav_top_search_input').focus();
  };
  input_focus_out = () => {
    // document.querySelector('.nav_top_search_input').value = '';
    document.querySelector('.nav_top_search_input').style.display = 'none';
    document.querySelector('.nav_top_search_t').style.display = 'inline';
  };
  on_search_submit = e => {
    e.preventDefault();
    let keyword = document.querySelector('.nav_top_search_input').value;
    console.log(keyword);
    this.props.fetch_jobs({ page: 1, source: 'search', keyword: keyword });
    document.querySelector('.nav_top_search_input').blur();
  };
  componentDidMount() {
    let current_source = this.props.jobs_data.source || 'yourator';
    document.querySelector(`.nav_top_${current_source}`).classList.remove('nav_top_not_selected');
    document.querySelector(`.nav_top_${current_source}`).classList.add('nav_top_selected');
  }

  componentDidUpdate() {
    let current_source = this.props.jobs_data.source || 'yourator';
    console.log('curr', current_source);

    document.querySelectorAll('.nav_top_option').forEach(ele => {
      ele.classList.remove('nav_top_selected');
      ele.classList.add('nav_top_not_selected');
    });

    document.querySelector(`.nav_top_${current_source}`).classList.remove('nav_top_not_selected');
    document.querySelector(`.nav_top_${current_source}`).classList.add('nav_top_selected');

    document.querySelector('.contentsContainer_border').className = `contentsContainer_border contentsContainer_border_${current_source}`;
  }

  render() {
    return (
      <nav className='nav_top'>
        <div className='nav_top_yourator nav_top_option nav_top_not_selected'>
          <div className='nav_top_option_p' style={{ pointerEvents: 'none' }}>
            yourator
          </div>
        </div>
        <div className='nav_top_meetjobs nav_top_option nav_top_not_selected'>
          <div className='nav_top_option_p' style={{ pointerEvents: 'none' }}>
            meetjobs
          </div>
        </div>
        <div className='nav_top_104 nav_top_option nav_top_not_selected'>
          <div className='nav_top_option_p' style={{ pointerEvents: 'none' }}>
            104
          </div>
        </div>
        <div className='nav_top_search nav_top_option  nav_top_not_selected' onClick={this.nav_search_click}>
          <div className='nav_top_option_p' style={{ display: 'flex' }}>
            <span className='nav_top_search_t'>Search</span>
            <form action='' onSubmit={this.on_search_submit}>
              <input type='text' className='nav_top_search_input' style={{ display: 'none' }} onBlur={this.input_focus_out} />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { jobs_data: state.jobs };
};

// export default Contents;

export default connect(
  mapStateToProps,
  { fetch_jobs: fetch_jobs }
)(Nav);

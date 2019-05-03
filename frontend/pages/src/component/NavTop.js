import React, { Component } from 'react';
import ButtonCompany from '../component/ButtonCompany';
import './NavTop.css';
import { connect } from 'react-redux';
import { log } from 'util';

let logo_yourator = require('../img/youratorlogo.png');
let logo_104 = require('../img/104logo.png');
let logo_meetjobs = require('../img/meetjobslogo.svg');

class Nav extends Component {
  componentDidMount() {
    let current_source = this.props.jobs_data.source || 'yourator';
    console.log('curr', current_source);

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

    document.querySelector('.jobsContainer').className = `jobsContainer jobsContainer_${current_source}`;
  }

  render() {
    return (
      <nav className='nav_top'>
        <div className='nav_top_yourator nav_top_option nav_top_not_selected'> yourator</div>
        <div className='nav_top_meetjobs nav_top_option nav_top_not_selected'>meetjobs</div>
        <div className='nav_top_104 nav_top_option nav_top_not_selected'>104</div>
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
  {}
)(Nav);

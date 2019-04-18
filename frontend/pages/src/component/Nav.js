import React, { Component } from 'react';
import ButtonCompany from '../component/ButtonCompany';
import './Nav.css';
import { fetch_jobs } from '../action/index';
import { connect } from 'react-redux';

let logo_yourator = require('../img/youratorlogo.png');
let logo_104 = require('../img/104logo.png');
let logo_meetjobs = require('../img/meetjobslogo.svg');

class Nav extends Component {
  // logo_click = e => {
  //   console.log(e.currentTarget.classList);
  //   if ('current_logo'.lastIndexOf(e.currentTarget.classList)) {
  //     console.log('current_logo');
  //     let not_current_logo = document.querySelectorAll('.not_current_logo');
  //     not_current_logo.forEach(e => {
  //       e.classList.toggle('down_to_buttom');
  //     });
  //   }
  // };

  render() {
    console.log('aaaa', this.props);

    let current_logo = '';
    if (this.props.jobs_data.source.length > 1) {
      switch (this.props.jobs_data.source) {
        case 'yourator':
          current_logo = (
            <>
              <ButtonCompany imgSRC={logo_yourator} current_logo={'current_logo'} className='logo_0 yourator' />
              <ButtonCompany imgSRC={logo_104} className='logo_1 104' />
              <ButtonCompany imgSRC={logo_meetjobs} className='logo_2 meetjobs' />
            </>
          );
          break;
        case '104':
          current_logo = (
            <>
              <ButtonCompany imgSRC={logo_104} current_logo={'current_logo'} className='logo_0 104' />
              <ButtonCompany imgSRC={logo_meetjobs} className='logo_1 meetjobs' />
              <ButtonCompany imgSRC={logo_yourator} className='logo_2 yourator' />
            </>
          );
          break;
        default:
          break;
      }
    } else {
      current_logo = (
        <>
          <ButtonCompany imgSRC={logo_yourator} current_logo={'current_logo'} className='logo_0 yourator' />
          <ButtonCompany imgSRC={logo_104} className='logo_1 104' />
          <ButtonCompany imgSRC={logo_meetjobs} className='logo_2 meetjobs' />
        </>
      );
    }
    return <nav className='navbar'>{current_logo}</nav>;
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

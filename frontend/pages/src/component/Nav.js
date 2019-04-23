import React, { Component } from 'react';
import ButtonCompany from '../component/ButtonCompany';
import './Nav.css';
import { connect } from 'react-redux';

let logo_yourator = require('../img/youratorlogo.png');
let logo_104 = require('../img/104logo.png');
let logo_meetjobs = require('../img/meetjobslogo.svg');

class Nav extends Component {
  render() {
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
          current_logo = (
            <>
              <ButtonCompany imgSRC={logo_meetjobs} current_logo={'current_logo'} className='logo_0 meetjobs' />
              <ButtonCompany imgSRC={logo_yourator} className='logo_1 yourator' />
              <ButtonCompany imgSRC={logo_104} className='logo_2 104' />
            </>
          );
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
  {}
)(Nav);

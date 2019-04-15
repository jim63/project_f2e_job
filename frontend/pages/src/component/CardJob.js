import React, { Component } from 'react';
import './CardJob.css';

class cardJob extends Component {
  render() {
    return (
      <div className='cardJobContainer'>
        <div className='jobCard' style={{}}>
          <div className='jobCardImgContainer' style={{}}>
            {/* <div className='jobCardImg' /> */}
            <img src={this.props.imgSRC} className='jobCardImg' width='100%' height='100%' alt='' />
          </div>
          <div className='jobCardText'>
            <p className='companyJobTitle'>
              <span className='companySpan'>
                {this.props.company.length > 15 ? `${this.props.company.slice(0, 15)}...` : this.props.company}
              </span>{' '}
              -{' '}
              <span className='jobTitleSpan'>
                {this.props.jobTitle.length > 15 ? `${this.props.jobTitle.slice(0, 15)}...` : this.props.jobTitle}
              </span>
            </p>
            <p className='company'>
              {this.props.company.length > 30 ? `${this.props.company.slice(0, 30)}...` : this.props.company}
            </p>
            <p className='jobTitle'>
              {this.props.jobTitle.length > 30 ? `${this.props.jobTitle.slice(0, 30)}...` : this.props.jobTitle}
            </p>
            <p className='salary'>
              {this.props.salary.length > 30 ? `${this.props.salary.slice(0, 30)}...` : this.props.salary}
            </p>
            <p className='location'>
              {this.props.location.length > 20 ? `${this.props.location.slice(0, 20)}...` : this.props.location}
            </p>
            <p className='description'>
              {this.props.description.length > 40
                ? `${this.props.description.slice(0, 40)}...`
                : this.props.description}
            </p>
            <p className='description_wide'>
              {this.props.description.length > 80
                ? `${this.props.description.slice(0, 80)}...`
                : this.props.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default cardJob;

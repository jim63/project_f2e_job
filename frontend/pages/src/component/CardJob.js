import React, { Component } from 'react';
import './CardJob.css';

class cardJob extends Component {
  render() {
    return (
      <div className='jobCard' style={{}}>
        <div className='jobCardImg' style={{}} />
        <div className='jobCardText'>
          <p>{this.props.company.length > 15 ? `${this.props.company.slice(0, 15)}...` : this.props.company}</p>
          <p>{this.props.jobTitle.length > 15 ? `${this.props.jobTitle.slice(0, 15)}...` : this.props.jobTitle}</p>
          <p>{this.props.jobTitle.location > 15 ? `${this.props.location.slice(0, 15)}...` : this.props.location}</p>
          <p>{this.props.jobTitle.salary > 15 ? `${this.props.salary.slice(0, 15)}...` : this.props.salary}</p>
        </div>
      </div>
    );
  }
}

export default cardJob;

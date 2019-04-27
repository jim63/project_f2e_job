import React, { Component } from 'react';
import './CardJob.css';
import { add_favo, remove_favo } from '../action/index';
import { connect } from 'react-redux';

class CardJob extends Component {
  add_to_favo = e => {
    let source = e.target.getAttribute('source');
    let jobid = Number(e.target.getAttribute('jobid'));
    fetch('http://localhost:3006/addFavo', {
      credentials: 'include',
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ source: source, jobid: jobid }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      response.json().then(data => {
        this.props.add_favo(JSON.parse(data.favo_list));
      });
    });
  };

  remove_favo = e => {
    let source = e.target.getAttribute('source');
    let jobid = Number(e.target.getAttribute('jobid'));
    fetch('http://localhost:3006/removeFavo', {
      credentials: 'include',
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ source: source, jobid: jobid }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => {
      response.json().then(data => {
        this.props.remove_favo(JSON.parse(data.favo_list));
      });
    });
  };

  render() {
    let source = this.props.source;
    let jobid = this.props.jobID;
    let isFavo;
    if (this.props.user_status.favorite_job) {
      if (this.props.user_status.favorite_job[`${source}`].indexOf(Number(jobid)) === -1) {
        isFavo = (
          <div className='addToFavo' jobid={this.props.jobID} source={this.props.source} onClick={this.add_to_favo}>
            <p style={{ pointerEvents: 'none' }}>加入收藏</p>
          </div>
        );
      } else {
        isFavo = (
          <div className='removeFavo' jobid={this.props.jobID} source={this.props.source} onClick={this.remove_favo}>
            <p style={{ pointerEvents: 'none' }}>取消收藏</p>
          </div>
        );
      }
    }

    return (
      <div className='cardJobContainer'>
        <div className='jobCard'>
          <div className='jobCardImgContainer'>
            <img src={this.props.imgSRC} className='jobCardImg' width='100%' height='auto' alt='' />
          </div>
          <div className='jobCardText'>
            <p className='companyJobTitle'>
              <span className='companySpan'>
                {this.props.company.length > 15 ? `${this.props.company.slice(0, 15)}...` : this.props.company}
              </span>
              <span className='jobTitleSpan'>
                {this.props.jobTitle.length > 10 ? `${this.props.jobTitle.slice(0, 10)}...` : this.props.jobTitle}
              </span>
            </p>
            <p className='company'>
              {this.props.company.length > 30 ? `${this.props.company.slice(0, 30)}...` : this.props.company}
            </p>
            <p className='jobTitle'>
              {this.props.jobTitle.length > 20 ? `${this.props.jobTitle.slice(0, 20)}...` : this.props.jobTitle}
            </p>
            <p className='salary'>
              {this.props.salary.length > 30 ? `${this.props.salary.slice(0, 30)}...` : this.props.salary}
            </p>
            <p className='location'>
              {this.props.location.length > 20 ? `${this.props.location.slice(0, 20)}...` : this.props.location}
            </p>
            <p className='description_wide'>
              {this.props.description.length < 2
                ? '無'
                : this.props.description.length > 30
                ? `${this.props.description.slice(0, 30)}...`
                : this.props.description}
            </p>
            {isFavo}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user_status: state.user_status };
};

export default connect(
  mapStateToProps,
  { add_favo: add_favo, remove_favo: remove_favo }
)(CardJob);

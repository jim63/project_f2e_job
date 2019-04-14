import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
  render() {
    console.log('123', this.props);

    return (
      <nav className='banner' style={{}}>
        <div className='bannerText' style={{}}>
          <p>WORK LIFE BALANCE</p>
          <p>ARE YOU READY?</p>
        </div>
      </nav>
    );
  }
}

// export default Banner;

export default Banner;

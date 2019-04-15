import React, { Component } from 'react';
import './Pages.css';

class Pages extends Component {
  render() {
    console.log('rrr', this.props);

    return (
      <div
        className='PageButton'
        onClick={() => {
          this.props.changePage(this.props.page);
        }}
      >
        <div className='pageButton'> {this.props.page}</div>
      </div>
    );
  }
}

export default Pages;

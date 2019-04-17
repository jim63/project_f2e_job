import React, { Component } from 'react';
import './Pages.css';

class Pages extends Component {
  render() {
    console.log('rrr', this.props);

    return (
      <div className='PageButton'>
        <div
          className='pageButton'
          onClick={() => {
            this.props.changePage(this.props.page);
          }}
        >
          {this.props.page}
        </div>
      </div>
    );
  }
}

export default Pages;

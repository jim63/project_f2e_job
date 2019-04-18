import React, { Component } from 'react';
import './Pages.css';

class Pages extends Component {
  render() {
    console.log('rrr', this.props);

    return (
      <div className='PageButtonContainer'>
        <div
          className={this.props.focus == true ? 'pageButton onThisPage' : 'pageButton'}
          onClick={() => {
            this.props.changePage(this.props.page, this.props.source);
          }}
        >
          {this.props.page}
        </div>
      </div>
    );
  }
}

export default Pages;

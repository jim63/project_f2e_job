import React, { Component } from 'react';
import CardJob from './CardJob';

import './Contents.css';

class Contents extends Component {
  render() {
    return (
      <div className='jobsContainer' style={{ backgroundColor: '#ffffff', display: 'flex', flexWrap: 'wrap' }}>
        <CardJob company='ekrfnkrenfk' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob
          company='aaaaa'
          jobTitle='前端工程師(Front-end engineer/Javascript developer)'
          location='台北'
          salary='月薪:60000~80000'
        />
        <CardJob company='jjjj' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='ggggg' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='543210000' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
        <CardJob company='12345' jobTitle='前端工程師' location='台北' salary='月薪:60000~80000' />
      </div>
    );
  }
}

export default Contents;

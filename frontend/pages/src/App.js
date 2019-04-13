import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './component/Header';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Contents from './component/Contents';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Banner />
        <div className='contentsContainer'>
          <Nav />
          <Contents />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

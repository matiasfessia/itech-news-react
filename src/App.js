import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Newsletter from './components/Newsletter';

class App extends Component {
  render() {
    return (
      <div className="App site-wrapper">
        <Header />
        <Newsletter />
        <Home />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;

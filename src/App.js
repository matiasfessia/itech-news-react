import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ArticleView from './components/ArticleView';
import Newsletter from './components/Newsletter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }
  }

  handleAddToFavorites(post) {
    this.setState((prevState) => ({ favorites: [...prevState.favorites, post] }));
  }

  render() {
    return (
      <div className="App site-wrapper">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about-us' component={AboutUs}/>
          <Route
            path='/:slug'
            component={(props) => <ArticleView {...props} sarasa={this.handleAddToFavorites}/> }
          />
        </Switch>
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default App;

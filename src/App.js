import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ArticleView from './components/ArticleView';
import Newsletter from './components/Newsletter';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      user: undefined,
    }
  }

  handleAddToFavorites = (post) => {
    console.log('llego este post para agregar a favoritos: ', post);
    this.setState(prevState => ({ favorites: [...prevState.favorites, post] }));
  }

  handleGoogleAuth = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
      this.setState(() => ({ user: result.user }));
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App site-wrapper">
      <button type="button" onClick={this.handleGoogleAuth}>Iniciar con Google</button>
        <Header favorites={this.state.favorites} user={this.state.user} />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about-us' component={AboutUs}/>
          <Route
            path='/:slug'
            component={(props) => <ArticleView {...props} user={this.state.user} sarasa={this.handleAddToFavorites}/> }
          />
        </Switch>
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default App;

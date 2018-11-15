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
      user: null,
      loggedIn: true,
      favorites: []
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    })
  }

  handleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  handleLogout = () => {
    firebase.auth().signOut()
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  addPostToFavorites = (post) => {
    this.setState((prevState) => ({ favorites: [...prevState.favorites, post] }));
  }

  render() {
    return (
      <div className="App site-wrapper">
        { this.state.user === null && <button type="button" onClick={this.handleAuth}>Iniciar con Google</button> }
        { this.state.user && 
          <p>{ this.state.user.displayName } <button type="button" onClick={this.handleLogout}>salir</button></p>
        }
        <Header favorites={this.state.favorites} />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about-us' component={AboutUs}/>
          <Route
            path='/blog/:slug'
            render={props => (<ArticleView {...props} loggedIn={this.state.loggedIn} addPostToFavorites={this.addPostToFavorites}/>) }
          />
        </Switch>
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default App;

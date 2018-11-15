import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyD36dbtk8XS_JAEKaNeQQbTqVQFRt86eeA",
  authDomain: "itechnews-c2a92.firebaseapp.com",
  databaseURL: "https://itechnews-c2a92.firebaseio.com",
  projectId: "itechnews-c2a92",
  storageBucket: "itechnews-c2a92.appspot.com",
  messagingSenderId: "687961998361"
});

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

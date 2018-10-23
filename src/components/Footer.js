import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <h2>Seguinos en</h2>
        <ul>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Pinterest</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
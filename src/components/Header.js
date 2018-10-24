import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="logo">ITECH NEWS</h1>
        <nav className="navigation">
          <ul>
            <li>
              <button type="button" className="link-home link-to-section">Inicio</button>
            </li>
            <li>
              <button type="button" className="link-about-us link-to-section">Quienes somos</button>
            </li>
            <li>
              <button type="button" className="link-contact link-to-section">Contacto</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
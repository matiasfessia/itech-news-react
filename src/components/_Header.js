import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  render() {
    // console.log('this.props.favorites', this.props.favorites);
    return (
      <header>
        <div className="top-header">
          <h1 className="logo">ITECH NEWS</h1>
          <div className="posts-loved">
            <ul>
            { this.props.favorites.map(post => (
              <li>{ post.title }</li>
            ))}
            </ul>
          </div>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to='/' className="link-home link-to-section">Inicio</Link>
            </li>
            <li>
              <Link to='/about-us' className="link-about-us link-to-section">Quienes somos</Link>
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
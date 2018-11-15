import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {

  render() {
    // console.log('this.props.postsLoved', this.props.postsLoved);
    return (
      <header>
        <div className="top-header">
          <h1 className="logo">ITECH NEWS {this.props.sarasa}</h1>
          <ul>
            { this.props.favorites.map(favorite => (
              <li>{favorite.title}</li>
            ))
            }
          </ul>
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
          <h1>{this.props.user && this.props.user.email}</h1>
        </nav>
      </header>
    );
  }
}

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Article.scss';

class Article extends Component {
  render() {
    return (
      <article>
        <div className="content">
          <Link to={`/${this.props.post.slug}`} className="link-home link-to-section">
            <h1>{this.props.post.title}</h1>
          </Link>
          <h2>Publicado por {this.props.post.author} el dia {this.props.post.date}</h2>
          <p>{this.props.post.extract}</p>
        </div>
        <div className="picture" style={{ backgroundImage: `url(${this.props.post.picture})` }}></div>
      </article>
    );
  }
}

export default Article;

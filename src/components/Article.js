import React, { Component } from 'react';
import './Article.scss';

class Article extends Component {
  render() {
    return (
      <article>
        <div className="content">
          <h1>{this.props.post.title}</h1>
          <h2>Publicado por {this.props.post.author} el dia {this.props.post.date}</h2>
          <p>{this.props.post.extract}</p>
        </div>
        <div className="picture" style={{ backgroundImage: `url(${this.props.post.picture})` }}></div>
      </article>
    );
  }
}

export default Article;

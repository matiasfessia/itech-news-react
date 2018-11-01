import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class ArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: undefined
    }
  }

  componentDidMount() {
    const params = this.props.match.params;
    axios.get('http://localhost:3001/api/posts/' + params.slug)
      .then(response => {
        this.setState(() => ({ post: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleAddToFavoritesClick = () => {
    this.props.sarasa();
  }

  render() {
    // console.log('>>>>>>>>>>><', this.props.handleAddToFavorites);

    return (
      <article>
        { typeof this.state.post !== 'undefined' &&
        <div>
          <div className="content">
            <h1>{this.state.post.title}</h1>
            <h2>Publicado por {this.state.post.author} el dia {this.state.post.date}</h2>
            <div dangerouslySetInnerHTML={{__html: this.state.post.text}}></div>

          </div>
          <div className="picture" style={{ backgroundImage: `url(${this.state.post.picture})` }}></div>
          <button type="button" onClick={this.handleAddToFavoritesClick}>Agregar a favoritos</button>
        </div>
        }
      </article>
    );
  }
}

export default ArticleView;
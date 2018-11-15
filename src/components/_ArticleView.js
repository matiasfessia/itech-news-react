import React, { Component } from 'react';
import axios from 'axios';

class ArticleView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: undefined,
    };
  }

  componentDidMount() {
    const params = this.props.match.params;
    if (typeof params.slug !== 'undefined') {
      axios.get(`http://localhost:3001/api/posts/${params.slug}`)
        .then(response => {
          this.setState(() => ({ post: response.data }));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  handleAddToFavorites = () => {
    this.props.addPostToFavorites(this.state.post);
  }

  render() {
    return (
      <div>
        { typeof this.state.post !== 'undefined' &&
          <div>
            <article>
              <div className="content">
                <h1>{this.state.post.title}</h1>
                <div className="picture" style={{ backgroundImage: `url(${this.state.post.picture})` }} />
                <div dangerouslySetInnerHTML={{__html: this.state.post.text}}></div>
                <h2>Publicado por {this.state.post.author} el dia {this.state.post.date}</h2>
                { this.props.loggedIn === true &&
                  <button type="button" onClick={this.handleAddToFavorites}>Me encanta este artículo</button>
                }
              </div>
            </article>
          </div>
        }
      </div>
    );
  }
}

export default ArticleView;

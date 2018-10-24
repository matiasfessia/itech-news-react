import React, { Component } from 'react';
import axios from 'axios';
import './Home.scss';
import Article from './Article';
import shortid from 'shortid';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/posts')
      .then(response => {
        this.setState(() => ({ posts: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  

  render() {
    return (
      <div className="home">
        {
          this.state.posts.map(post => {
            return (
              <Article post={post}  key={shortid.generate()} />
            );
          })
        }
      </div>
    );
  }
}

export default Home;

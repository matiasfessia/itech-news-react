import React, { Component } from 'react';
import axios from 'axios';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/content/about-us')
      .then(response => {
        const content = {};
        if (typeof response.data.value !== 'undefined') {
          response.data.value.forEach(cont => {
            content[cont.code] = cont.value;
          });
        }
        this.setState(() => ({ content }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <section className="about-us">
        <h2>{ this.state.content['about-us-title']}</h2>
        <img src={ this.state.content['about-us-pic'] } />
        <div dangerouslySetInnerHTML={{__html: this.state.content['about-us-text']}}></div>
      </section>
    );
  }
}

export default AboutUs;
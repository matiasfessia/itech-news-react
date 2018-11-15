import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import axios from 'axios';


class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      email: {
        value: '',
        error: ''
      },
      completed: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/content/newsletter')
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

  handleSubmitForm = (event) => {
    event.preventDefault();
    if (this.state.email.value.length < 5) {
      this.setState({
        email: {
          value: event.target.value,
          error: 'Tiene que ser como minimo 5 caracteres'
        }
      });
    } else {
      const payload = { email: this.state.email.value };
      axios.post('http://localhost:3001/api/newsletter-subscription', payload)
      .then(response => {
        if (response.status === 200) {
          // this.setState({ completed: true});
          this.props.history.push('/')
          alert('Se ha registrado con exito');
        }
      })
      .catch(error => {
        console.log('error detected: ', error);
        alert('Ups! Se ha producido un error. Vuelva a intentar.');
      });
    }
  }

  handleChange = (event) => {
    this.setState({email: {value: event.target.value}});
  }

  render() {
    /*
    if (this.state.completed === true) {
      return <Redirect to='/' />
    }
    */

    return (
      <section className="newsletter">
        <h2>{ this.state.content['newsletter-title'] }</h2>
        <div dangerouslySetInnerHTML={{__html: this.state.content['newsletter-text']}}></div>
        <div className="form">
          <div className="form-wrapper">
            <form onSubmit={this.handleSubmitForm}>
              <input
                id="newsletter-email"
                text="email"
                placeholder="tu@email.com"
                title="Newsletter Sign-Up"
                value={this.state.email.value}
                onChange={this.handleChange} 
              />
              <p>{this.state.email.error}</p>
              <button id="newsletter-btn" type="submit">
                <span className="newsletter-btn-text">Enviar</span>
                <span className="newsletter-btn-spinner hidden">Procesando</span>
              </button>
              
            </form>
          </div>
        </div>
      </section>
    );
  }
}
    
export default withRouter(Newsletter);
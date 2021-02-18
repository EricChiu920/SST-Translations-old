import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import LoadButton from '../loadButton/LoadButton';
import './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: false,
    errorMessage: 'Unexepected error',
    isLoading: false,
  }

  validateForm = () => {
    const { email, password } = this.state;

    return !(email.length > 0 && password.length > 0);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const { email, password } = this.state;
    const { userHasAuthenticated } = this.props;

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
    } catch (e) {
      this.setState({
        error: true,
        isLoading: false,
        errorMessage: e.message,
      });
    }
  }

  render() {
    const {
      email,
      password,
      error,
      errorMessage,
      isLoading,
    } = this.state;

    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} error={error}>
          <Message error content={errorMessage} />
          <Form.Field>
            <label htmlFor="email">
              Email
              <input value={email} onChange={this.handleChange} type="email" placeholder="Email" id="email" />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">
              Password
              <input value={password} onChange={this.handleChange} type="password" placeholder="Password" id="password" />
            </label>
          </Form.Field>
          <LoadButton disabled={this.validateForm()} isLoading={isLoading} loadingText="Logging in..." text="Login" />
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Message } from 'semantic-ui-react';
import AppRouter from './components/router/AppRouter';
import './App.css';

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    error: false,
    errorMessage: 'Unexpected error',
  };

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user') {
        this.setState({
          error: true,
          errorMessage: e,
        });
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const {
      isAuthenticated,
      isAuthenticating,
      error,
      errorMessage,
    } = this.state;

    return (
      !isAuthenticating && <>
        {error && <Message error content={errorMessage} />}
        <div className="background">
          <div className="App">
            <Router>
              {/* eslint-disable-next-line max-len */}
              <AppRouter isAuthenticated={isAuthenticated} userHasAuthenticated={this.userHasAuthenticated} />
            </Router>
          </div>
        </div>
      </>
    );
  }
}

export default App;

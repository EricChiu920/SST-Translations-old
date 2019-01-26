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

  handleLogout = async () => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
  }

  render() {
    const {
      isAuthenticated,
      isAuthenticating,
      error,
      errorMessage,
    } = this.state;

    const authProps = {
      isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
    };

    return (
      !isAuthenticating && <>
        {error && <Message error content={errorMessage} />}
        <div className="background">
          <div className="App">
            {isAuthenticated && <button type="button" onClick={this.handleLogout}>logout</button>}
            <Router>
              <AppRouter authProps={authProps} />
            </Router>
          </div>
        </div>
      </>
    );
  }
}

export default App;

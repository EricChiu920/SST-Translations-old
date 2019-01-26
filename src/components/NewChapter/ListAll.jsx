/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { API } from 'aws-amplify';

class Home extends Component {
  state = {
    isLoading: true,
    notes: [],
  }

  async componentDidMount() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return;
    }

    try {
      const notes = await this.notes();
      this.setState({ notes, isLoading: false });
    } catch (e) {
      console.log('test');
    }
  }

  notes = () => {
    return API.get('notes', '/notes');
  }

  renderNotesList = (notes) => {
    return notes.map(note => <li>{note.content}</li>);
  }

  renderLander = () => {
    return (
      <div>
        <h1>Scratch</h1>
        <p>test demo</p>
      </div>
    );
  }

  renderNotes = () => {
    const { isLoading, notes } = this.state;
    return (
      <div>
        <h1>Notes</h1>
        <li>
          {!isLoading && this.renderNotesList(notes)}
        </li>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderNotes()}
      </div>
    );
  }
}

export default Home;

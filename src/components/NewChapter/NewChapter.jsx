import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { API } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import LoadButton from '../loadButton/LoadButton';

class NewChapter extends Component {
  state = {
    // eslint-disable-next-line
    novel: this.props.match.params.novel,
    title: '',
    chapter: '',
    body: '',
    isLoading: false,
    error: false,
    errorMessage: '',
  }

  validateForm = () => {
    const { novel, title, body } = this.state;
    return !(novel.length > 0 && title.length > 0 && body.length > 0);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    const {
      novel,
      title,
      chapter,
      body,
    } = this.state;
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      await API.post('sst', '/sst', {
        body: {
          novel,
          title,
          chapter,
          body,
        },
      })
        .then(response => console.log(response));
      // eslint-disable-next-line
      // this.props.history.push('/');
      this.setState({ isLoading: false });
    } catch (e) {
      this.setState({
        isLoading: false,
        error: true,
        errorMessage: e.message,
      });
    }
  }

  render() {
    const {
      novel,
      title,
      body,
      chapter,
      isLoading,
      error,
      errorMessage,
    } = this.state;

    return (
      <>
        <div>New Chapter Form</div>
        <Form onSubmit={this.handleSubmit} error={error}>
          <Message error content={errorMessage} />
          <Form.Field>
            <label htmlFor="novel">
              Chapter novel
              <input value={novel} onChange={this.handleChange} type="text" placeholder="Chapter Novel" id="novel" />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="chapter">
              Chapter Number
              <input value={chapter} onChange={this.handleChange} type="number" placeholder="Chapter Number" id="chapter" />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="title">
              Chapter Title
              <input value={title} onChange={this.handleChange} type="text" placeholder="Chapter Title" id="title" />
            </label>
          </Form.Field>
          <Form.Field>
            Chapter Text
            <textarea value={body} onChange={this.handleChange} type="text" placeholder="Chapter Name" id="body" rows="30" />
          </Form.Field>
          <LoadButton disabled={this.validateForm()} isLoading={isLoading} text="Upload Chapter" loadingText="Uploading..." />
        </Form>
      </>
    );
  }
}

export default withRouter(NewChapter);

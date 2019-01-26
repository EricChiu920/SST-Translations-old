import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { API } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import LoadButton from '../loadButton/LoadButton';

class NewChapter extends Component {
  state = {
    title: '',
    body: '',
    isLoading: false,
    error: false,
    errorMessage: '',
  }

  validateForm = () => {
    const { title, body } = this.state;
    return !(title.length > 0 && body.length > 0);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    const { title, body } = this.state;
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      await this.uploadChapter({
        title,
        body,
      })
        .then(response => console.log(response))
        // .catch((e) => {
        //   this.setState({
        //     isLoading: false,
        //     error: true,
        //     errorMessage: e.response,
        //   });
        // });
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

  // uploadChapter = text => API.post('notes', '/notes', { body: text })
  // eslint-disable-next-line arrow-body-style
  uploadChapter = (body) => {
    return API.post('notes', '/notes', {
      body,
    });
  }

  render() {
    const {
      title,
      body,
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
            <label htmlFor="title">
              Chapter Title
              <input value={title} onChange={this.handleChange} type="text" placeholder="Chapter Name" id="title" />
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

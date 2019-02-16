import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import LoadButton from '../loadButton/LoadButton';

class EditChapter extends Component {
  state = {
    isLoading: false,
  }

  validateForm = () => {
    const { novel, title, body } = this.props;
    // return !(novel.length > 0 && title.length > 0 && body.length > 0);
    return true;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { isLoading } = this.state;
    const {
      novel,
      chapter,
      title,
      body,
    } = this.props;

    return (
      <>
        <div>New Chapter Form</div>
        <Form onSubmit={this.handleSubmit}>
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

EditChapter.propTypes = {
  novel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default EditChapter;

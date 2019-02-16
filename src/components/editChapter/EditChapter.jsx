import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { API } from 'aws-amplify';
import LoadButton from '../loadButton/LoadButton';

class EditChapter extends Component {
  state = {
    isLoading: false,
    title: '',
    body: '',
  }

  componentDidMount() {
    const {
      title,
      body,
    // eslint-disable-next-line react/destructuring-assignment
    } = this.props.location.state.data;

    this.setState({
      title,
      body,
    });
  }

  validateForm = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { title, body } = this.props.location.state.data;
    return !(title.length > 0 && body.length > 0);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    // eslint-disable-next-line
    const { novel, chapter } = this.props.match.params;
    const { title, body } = this.state;
    // const { novel, chapter } = this.props.match.params;
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      await API.put('sst', `/sst/${novel}/${chapter}`, {
        body: {
          title,
          body,
        },
      });
    } catch (e) {
      console.log(e);
      this.setState({ isLoading: false });
    }
    // eslint-disable-next-line
    this.props.history.push(`/novels/${novel}/${chapter}`)
  }

  render() {
    const { isLoading } = this.state;
    const {
      title,
      body,
    } = this.state;

    return (
      <>
        <div>Edit Chapter Form</div>
        <Form onSubmit={this.handleSubmit}>
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
          <span>
            <LoadButton disabled={this.validateForm()} isLoading={isLoading} text="Upload Chapter" loadingText="Uploading..." />
            <Button color="red">Delete</Button>
          </span>
        </Form>
      </>
    );
  }
}

EditChapter.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.shape({
        novel: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        chapter: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
};

export default EditChapter;

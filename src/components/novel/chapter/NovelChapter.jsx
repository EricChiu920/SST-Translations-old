/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import ChapterOptions from './ChapterOptions';
import './NovelChapter.css';


class NovelChapter extends Component {
  state = {
    lastChapter: 4,
    data: undefined,
    isLoading: true,
    title: '',
    body: '',
    // settings: {
    //   fontsize: 16,
    // },
  }

  componentDidMount() {
    this.loadData();

    this.setState({
      isLoading: false,
    });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.chapter !== this.props.match.params.chapter) {
      this.loadData();
    }
  }

  async loadData() {
    const { novel, chapter } = this.props.match.params;
    const content = await API.get('sst', `/sst/${novel}/${chapter}`)
      .then(response => this.setState({
        title: response.title,
        body: response.body,
        data: response,
      }))
      .catch(() => this.props.history.push('/'));
    return content;
  }

  findChapter() {
    const { allChapters } = this.state;
    const { chapter } = this.props.match.params;
    return allChapters.find(res => res.chapter === chapter);
  }

  render() {
    const { novel, chapter } = this.props.match.params;
    const { isAuthenticated } = this.props.authProps;
    const {
      isLoading,
      lastChapter,
      title,
      body,
      data,
    } = this.state;

    return (
      !isLoading && <>
        <div>
          <div className="mainText">
            <Link to={`/novels/${novel}`}>Novel</Link>
            <h1 className="chapterHeaderClass">{title}</h1>
            <p className="chapterContentClass">{body}</p>
          </div>
          {isAuthenticated && <Link to={{ pathname: `/novels/${novel}/${chapter}/edit`, state: { data } }}><Button color="yellow">Edit</Button></Link>}
          <div>
            <span className="navigate">{chapter > 1 && <Link to={`/novels/${novel}/${Number(chapter) - 1}`}>Prev</Link>}</span>
            <span className="navigate toRight">{chapter < lastChapter && <Link to={`/novels/${novel}/${Number(chapter) + 1}`}>Next</Link>}</span>
          </div>
        </div>
        <ChapterOptions />
      </>
    );
  }
}

export default withRouter(NovelChapter);

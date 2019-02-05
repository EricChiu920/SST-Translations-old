/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API } from 'aws-amplify';
import DisplayChapter from './DisplayChapter';
// import ChapterOptions from './ChapterOptions';


class NovelChapter extends Component {
  state = {
    lastChapter: '',
    allChapters: [],
    isLoading: true,
    // settings: {
    //   fontsize: 16,
    // },
  }

  async componentDidMount() {
    const { novel } = this.props.match.params;
    const content = await API.get('sst', '/sst')
      .then(response => response.filter(data => data.novel === novel));

    if (content.length === 0) {
      this.props.history.push('/');
    }

    this.setState({
      allChapters: content,
      lastChapter: content.length,
      isLoading: false,
    });
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
    } = this.state;

    return (
      !isLoading && <>
        <DisplayChapter
          chapter={this.findChapter()}
          lastChapter={lastChapter}
          novel={novel}
          chapterNumber={chapter}
          isAuthenticated={isAuthenticated}
        />
        {/* <ChapterOptions /> */}
      </>
    );
  }
}

export default withRouter(NovelChapter);

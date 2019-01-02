/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChapterOptions from './ChapterOptions';
import './NovelChapter.css';

class NovelChapter extends Component {
  state = {
    settings: {
      fontsize: 16,
    },
  }

  render() {
    const { novel, chapter } = this.props.match.params;
    const data = this.props.text[novel];
    const content = data[chapter - 1];

    return (
      <div>
        <div>
          <Link to={`/novels/${novel}`}>Novel</Link>
          <h1 className="chapterHeaderClass">{content.title}</h1>
          <p className="chapterContentClass">{content.text}</p>
          {chapter > 1 && <Link to={`/novels/${novel}/${Number(chapter) - 1}`}>Prev</Link>}
          {chapter < data.length && <Link to={`/novels/${novel}/${Number(chapter) + 1}`}>Next</Link>}
        </div>
        {/* <ChapterOptions /> */}
      </div>
    );
  }
}

export default withRouter(NovelChapter);
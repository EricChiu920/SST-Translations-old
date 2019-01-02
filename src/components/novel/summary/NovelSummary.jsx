import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NovelSummary(props) {
  const {
    title,
    name,
    author,
    genre,
    tags,
    time,
    words,
    rawLink,
    teaser,
  } = props.summary;

  return (
    <>
      <div>
        <p>{`Title: ${title}`}</p>
        <p>{`Author: ${author}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Tags: ${tags}`}</p>
        <p>{`Estimated reading time: ${time} minutes (${words} characters)`}</p>
        <a href={rawLink}>Raw Link</a>
      </div>
      {teaser && (
        <div>
          <Link to={`/novels/${name}/1`}>Read Novel</Link>
        </div>
      )}
      {!teaser && (
        <Link to={`/novels/${name}`}>Chapter 1</Link>
      )}
    </>
  );
}

NovelSummary.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
  tags: PropTypes.string,
  time: PropTypes.number,
  words: PropTypes.number,
};

NovelSummary.defaultProps = {
  title: 'N/A',
  name: 'N/A',
  author: 'N/A',
  genre: 'N/A',
  tags: 'N/A',
  time: 0,
  words: 0,
};

export default NovelSummary;

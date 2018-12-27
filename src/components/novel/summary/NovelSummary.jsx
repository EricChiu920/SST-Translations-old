import React from 'react';
import PropTypes from 'prop-types';

function NovelSummary(props) {
  const {
    title,
    author,
    genre,
    tags,
    time,
    words,
  } = props;

  return (
    <div>
      <p>{`Title: ${title}`}</p>
      <p>{`Author: ${author}`}</p>
      <p>{`Genre: ${genre}`}</p>
      <p>{`Tags: ${tags}`}</p>
      <p>{`Estimated reading time: ${time} hours (${words} words)`}</p>
    </div>
  );
}

NovelSummary.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  genre: PropTypes.string,
  tags: PropTypes.string,
  time: PropTypes.number,
  words: PropTypes.number,
};

NovelSummary.defaultProps = {
  author: 'N/A',
  genre: 'N/A',
  tags: 'N/A',
  time: 0,
  words: 0,
};

export default NovelSummary;

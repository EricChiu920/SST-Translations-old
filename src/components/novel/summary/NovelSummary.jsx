import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { Link, withRouter } from 'react-router-dom';

const NovelSummary = (props) => {
  const { novel } = props.match.params;

  const {
    picture,
=======
import { Link } from 'react-router-dom';

function NovelSummary(props) {
  const {
>>>>>>> 29bd542214d7c5fca96a57f99db124357f00538d
    title,
    name,
    author,
    genre,
    tags,
    time,
    words,
    rawLink,
    teaser,
<<<<<<< HEAD
  } = props.summary[novel];
=======
  } = props.summary;
>>>>>>> 29bd542214d7c5fca96a57f99db124357f00538d

  return (
    <>
      <div>
<<<<<<< HEAD
        {picture && <img src={picture} alt="Illustration from the novel's front cover" height="500" />}
=======
>>>>>>> 29bd542214d7c5fca96a57f99db124357f00538d
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
<<<<<<< HEAD
  summary: PropTypes.objectOf(PropTypes.shape({
    picture: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    time: PropTypes.string,
    words: PropTypes.string,
    rawLink: PropTypes.string,
    teaser: PropTypes.bool,
  })),
=======
  title: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
  tags: PropTypes.string,
  time: PropTypes.number,
  words: PropTypes.number,
>>>>>>> 29bd542214d7c5fca96a57f99db124357f00538d
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

<<<<<<< HEAD
export default withRouter(NovelSummary);
=======
export default NovelSummary;
>>>>>>> 29bd542214d7c5fca96a57f99db124357f00538d

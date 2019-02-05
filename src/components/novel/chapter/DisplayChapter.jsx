import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Button } from 'semantic-ui-react';
import './DisplayChapter.css';


const DisplayChapter = ({
  chapter,
  lastChapter,
  novel,
  chapterNumber,
  isAuthenticated,
}) => (
  <div>
    <div className="mainText">
      <Link to={`/novels/${novel}`}>Novel</Link>
      <h1 className="chapterHeaderClass">{chapter.title}</h1>
      <p className="chapterContentClass">{chapter.body}</p>
    </div>
    {isAuthenticated && <Button color="yellow">Edit</Button>}
    <div>
      <span className="navigate">{chapterNumber > 1 && <Link to={`/novels/${novel}/${Number(chapterNumber) - 1}`}>Prev</Link>}</span>
      <span className="navigate textRight">{chapterNumber < lastChapter && <Link to={`/novels/${novel}/${Number(chapterNumber) + 1}`}>Next</Link>}</span>
    </div>
  </div>
);

DisplayChapter.propTypes = {
  chapter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  lastChapter: PropTypes.number.isRequired,
  novel: PropTypes.string.isRequired,
  chapterNumber: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withRouter(DisplayChapter);

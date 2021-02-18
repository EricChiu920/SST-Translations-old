import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Post.css';

class Post extends Component {
  // eslint-disable-next-line class-methods-use-this
  createPosts(posts) {
    const allPosts = [];
    for (let i = posts.length - 1; i >= 0; i -= 1) {
      allPosts.push(
        <div className="postClass" key={i}>
          <h1 className="centerText"><Link to={posts[i].link}>{posts[i].title}</Link></h1>
          <p>{posts[i].text}</p>
        </div>,
      );
    }
    return allPosts;
  }

  render() {
    const { posts } = this.props;
    return (
      this.createPosts(posts)
    );
  }
}

Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default Post;

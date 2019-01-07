/* eslint-disable no-use-before-define */
import React from 'react';
import './FrontPage.css';
import Post from './Post';
import posts from './posts';


const FrontPage = () => (
  <div className="frontPageClass">
    <Post posts={posts} />
  </div>
);

export default FrontPage;

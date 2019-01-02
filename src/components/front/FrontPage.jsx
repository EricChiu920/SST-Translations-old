/* eslint-disable no-use-before-define */
import React from 'react';
import './FrontPage.css';

const FrontPage = () => (
  <div className="frontPageClass">
    { content }
  </div>
);

const content = `Hi, welcome to my site. I'm a one man team that just started translating Japanese webnovels.
I'm also building the website myself so it's going to ugly.
To start off I plan to do teasers of a few webnovels to get some practice translating and also which one I like and want to continue with.
If there's a novel you want me to continue or do a teaser of you can let me know by joining the discord server in the contact link.
You can also let me know about all constructive criticism or suggestions you have.`;

export default FrontPage;

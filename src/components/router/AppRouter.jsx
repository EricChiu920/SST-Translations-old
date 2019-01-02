import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FrontPage from '../front/FrontPage';
import NovelSummary from '../novel/summary/NovelSummary';
import Header from '../header/Header';
import NovelChapter from '../novel/chapter/NovelChapter';
import summary from '../../novels/summary';
import text from '../../novels/text';

const AppRouter = () => (
  <>
    <div className="header"><Header /></div>
    <Switch>
      <Route exact path="/" render={() => <FrontPage />} />
      <Route path="/novels/:novel/:chapter" render={() => <NovelChapter text={text} />} />
      <Route exact path="/novels/:novel" render={() => <NovelSummary summary={summary.alchemist} />} />
      <Route exact path="/novels/2" render={() => <NovelSummary title="bcd" teaser />} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </>
);

export default AppRouter;

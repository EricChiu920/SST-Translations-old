import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from '../front/FrontPage';
import NovelSummary from '../novel/summary/NovelSummary';
import Header from '../header/Header';

const AppRouter = () => (
  <>
    <div className="header"><Header /></div>
    <Switch>
      <Route exact path="/" render={() => <FrontPage />} />
      <Route path="/novels/1" render={() => <NovelSummary title="abc" />} />
      <Route path="/novels/2" render={() => <NovelSummary title="bcd" />} />
    </Switch>
  </>
);

export default AppRouter;

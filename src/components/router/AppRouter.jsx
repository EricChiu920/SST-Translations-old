import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
=======
>>>>>>> 29bd542214d7c5fca96a57f99db124357f00538d
import FrontPage from '../front/FrontPage';
import NovelSummary from '../novel/summary/NovelSummary';
import Header from '../header/Header';
import NovelChapter from '../novel/chapter/NovelChapter';
import summary from '../../novels/summary';
import text from '../../novels/text';
import Contact from '../contact/Contact';
<<<<<<< HEAD
import Login from '../login/Login';
import NewChapter from '../newChapter/NewChapter';
import Home from '../newChapter/ListAll';

const AppRouter = ({ authProps }) => (
=======

const AppRouter = () => (
>>>>>>> 29bd542214d7c5fca96a57f99db124357f00538d
  <>
    <div className="header"><Header /></div>
    <Switch>
      <Route exact path="/" render={() => <FrontPage />} />
<<<<<<< HEAD
      <AuthenticatedRoute exact path="/novels/:novel/new" component={NewChapter} props={authProps} />
      <Route path="/novels/:novel/:chapter" render={() => <NovelChapter text={text} />} />
      <Route exact path="/novels/:novel" render={() => <NovelSummary summary={summary} />} />
      <Route path="/contact" render={() => <Contact />} />
      <UnauthenticatedRoute path="/login" component={Login} props={authProps} />
      <AuthenticatedRoute exact path="/all" component={Home} props={authProps} />
=======
      <Route path="/novels/:novel/:chapter" render={() => <NovelChapter text={text} />} />
      <Route exact path="/novels/:novel" render={() => <NovelSummary summary={summary.alchemist} />} />
      <Route exact path="/novels/2" render={() => <NovelSummary title="bcd" teaser />} />
      <Route path="/contact" render={() => <Contact />} />
>>>>>>> 29bd542214d7c5fca96a57f99db124357f00538d
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </>
);

export default AppRouter;

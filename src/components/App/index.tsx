import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import QuestionSlider from 'containers/QuestionSlider';
import { GlobalStyles } from 'globalStyles';

export const App: FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/questions">
            <QuestionSlider />
          </Route>
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
};

import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomeContainer } from 'containers/HomeContainer';
import QuestionSlider from 'containers/QuestionSlider';
import { GlobalStyles } from 'globalStyles';

export const App: FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeContainer />
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

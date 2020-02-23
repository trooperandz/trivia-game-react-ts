import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomeScreen } from '../../screens/HomeScreen';
import QuestionSlider from 'containers/QuestionSlider';
import { GlobalStyles } from 'globalStyles';

export const App: FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
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

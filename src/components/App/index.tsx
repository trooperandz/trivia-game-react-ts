import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomeScreen } from 'screens/HomeScreen';
import { QuizScreen } from 'screens/QuizScreen';
import { ResultsScreen } from 'screens/ResultsScreen';
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
            <QuizScreen />
          </Route>
          <Route path="/results">
            <ResultsScreen />
          </Route>
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
};

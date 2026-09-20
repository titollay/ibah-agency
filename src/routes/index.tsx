import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import ComingSoon from '../components/ComingSoon';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/coming-soon" component={ComingSoon} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

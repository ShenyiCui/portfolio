import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Routes from '@/utilities/routes';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={Routes.home} />
      <Route exact path={Routes.aboutMe} />
      <Route exact path={Routes.notFound} />
      <Route exact path='*'>
        <Redirect to={Routes.notFound} />
      </Route>
    </Switch>
  );
};

export default AppRouter;

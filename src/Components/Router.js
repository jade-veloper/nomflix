import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Header from './Header';
import Search from '../Routes/Search';
import Detail from '../Routes/Detail';

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route
        path="https://jade-veloper.github.io/nomflix/"
        exact
        component={Home}
      />
      <Route path="https://jade-veloper.github.io/nomflix/tv" component={TV} />
      <Route
        path="https://jade-veloper.github.io/nomflix/search"
        component={Search}
      />
      <Route
        path="https://jade-veloper.github.io/nomflix/movie/:id"
        component={Detail}
      />
      <Route
        path="https://jade-veloper.github.io/nomflix/show/:id"
        component={Detail}
      />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import Home from './components/Home';
import Sample from './components/Sample';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route exact path="/" component={Home}/>
      <Route path="/sample" component={Sample}/>
    </div>
  </Router>
);

export default Routes;

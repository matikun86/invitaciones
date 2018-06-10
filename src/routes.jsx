import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import Home from './components/Home';
import ComoLlegar from './components/ComoLlegar/ComoLlegar';
import RSVP from './components/RSVP';

const Routes = () => (
  <Router basename={process.env.basename}>
    <App>
      <Route exact path="/" component={Home}/>
      <Route exact path="/como-llegar" component={ComoLlegar}/>
      <Route exact path="/rsvp" component={RSVP}/>
    </App>
  </Router>
);

export default Routes;

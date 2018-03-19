import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import Home from './components/Home';
import ComoLlegar from './components/ComoLlegar';
import RSVP from './components/RSVP';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route exact path="/" component={Home}/>
      <Route path="/como-llegar" component={ComoLlegar}/>
      <Route exact path="/rsvp" component={RSVP}/>
    </div>
  </Router>
);

export default Routes;

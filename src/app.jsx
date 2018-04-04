import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';

import "styles/base/index.sass"  // Global styles

export default (props) => (
  <div className="container">
    <Navigation />
    <main>
      {props.children}
    </main>
  </div>
);
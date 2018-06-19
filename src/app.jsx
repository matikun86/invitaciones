import React from 'react';
// import Navigation from './components/Navigation';
import 'normalize.css';

import "styles/base/index.sass"  // Global styles

export default (props) => (
    <main className="">
      {props.children}
    </main>
);
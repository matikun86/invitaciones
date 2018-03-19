import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';

import "styles/base/index.sass"  // Global styles

const App = (props) => (
  <div className='App'>
    <Navigation/>
    <main>
      {props.children}
    </main>
  </div>
);

export default App;

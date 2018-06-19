import React from 'react';
// import Navigation from './components/Navigation';
import Home from './components/Home/Home';
import ComoLlegar from './components/ComoLlegar/ComoLlegar';

import 'normalize.css';
import "styles/base/index.sass"  // Global styles

export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.fullPage = React.createRef();
    }

    componentDidMount() {
        $(this.fullPage.current).fullpage();
    }

    render() {
      return (
        <main ref={this.fullPage}>
            <section className="section">
                <Home />
            </section>
            <section className="section">
                <ComoLlegar />
            </section>
        </main>
    );
  }
}

import React from 'react';
// import Navigation from './components/Navigation';
import Home from './components/Home/Home';
import ComoLlegar from './components/ComoLlegar/ComoLlegar';

import 'normalize.css';
import "styles/base/index.sass"  // Global styles

import icon from './images/wedding.png';

export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.fullPage = React.createRef();
    }

    componentDidMount() {
        $(this.fullPage.current).fullpage({
            slideSelector: '.full-page-slide',
            // navigation: true,
        });
    }

    render() {
      return ([
        <header key="header">
            <a href="/"><img className="icon" src={icon} /></a>
        </header>,
        <main key="main" ref={this.fullPage}>
            <section className="section" data-anchor="home">
                <Home />
            </section>
            <section className="section" data-anchor="mapa">
                <ComoLlegar />
            </section>
        </main>
    ]);
  }
}

import React from 'react';
// import Navigation from './components/Navigation';
import Home from './components/Home/Home';
import ComoLlegar from './components/ComoLlegar/ComoLlegar';
import InfoRegalo from './components/InfoRegalo/InfoRegalo';
import ConfirmarAsistencia from './components/ConfirmarAsistencia/ConfirmarAsistencia';

import 'normalize.css';
import "styles/base/index.sass"  // Global styles

import icon from './images/wedding.png';

export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.fullPage = React.createRef();
    }

    componentWillMount() {
        this.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 768;
    }

    componentDidMount() {
        $(this.fullPage.current).fullpage({
            slideSelector: '.full-page-slide',
            normalScrollElements: '.map-container',
        });
    }

    render() {
      return ([
        <header key="header">
            <a href="#home"><img className="icon" src={icon} /></a>
        </header>,
        <main key="main" ref={this.fullPage}>
            <section className="section" data-anchor="home">
                <Home />
            </section>
            <section className="section" data-anchor="mapa">
                <ComoLlegar />
            </section>
            {this.isMobile && <section className="section d-lg-none d-xl-none" data-anchor="asistencia">
                <ConfirmarAsistencia />
            </section>}
            <section className="section" data-anchor="info-regalo">
                <InfoRegalo />
            </section>
        </main>
    ]);
  }
}

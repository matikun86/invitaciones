import React from 'react';
import piggyBank from './../../images/piggy-bank.png';

const InfoRegalo = () => (
  <section className="info-regalo h-100 position-relative d-flex flex-row">

    <div className="align-self-center text-center mx-auto">
        <h1>En caso de regalo use el chanchito...</h1>
        <img className="piggy-bank mt-3 mb-4" src={piggyBank} />
        <p class="small">No tenedremos lista de regalos, pero en el salon vamos a tener una caja para quien quiera colaborar con nuestra luna de miel</p>
    </div>

    <a href="#" className="hint-arrow up text-dark" onClick={() => $.fn.fullpage.moveSectionUp()}>
      <i className="material-icons">arrow_upward</i>
    </a>
  </section>
);

export default InfoRegalo;

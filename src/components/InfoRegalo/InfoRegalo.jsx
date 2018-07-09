import React from 'react';

const InfoRegalo = () => (
  <section className="info-regalo h-100 position-relative d-flex flex-row">

    <div className="align-self-center text-center mx-auto">
        <h3>Sobre el regalo</h3>
        <p>Un regalo no es necesario pero si nos quieren dar toda la papa, en el salón vamos a tener una caja donde pueden poner un sobre o si es más fácil una trasnferencia a la cuenta de Mati :)</p>
    </div>

    <a onClick={() => $.fn.fullpage.moveSectionUp()} href="#" className="hint-arrow up text-dark">
      <i className="material-icons">arrow_upward</i>
    </a>
  </section>
);

export default InfoRegalo;

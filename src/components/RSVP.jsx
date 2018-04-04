import React from 'react';

export default class RSVP extends React.Component {
  constructor(props) {
    super(props);

    this.onConfirm = this.onConfirm.bind(this);
  }

  onConfirm(event) {
    alert('yaaaay!');
    event.preventDefault();
  }

  render() {
    return <section className="rsvp">
      <h3>RSVP</h3>
      <p>Por favor confirmá tu asistencia. Solo necesitamos tu nombre y apellido.</p>

      <form onSubmit={this.onConfirm}>
        <div className="form-group">
          <input type="text" className="form-control" id="fullname" placeholder="Joan Manuel Serrat" required />
        </div>
        <button type="submit" className="btn btn-primary">Confirmar</button>
      </form>
    </section>
  }
};
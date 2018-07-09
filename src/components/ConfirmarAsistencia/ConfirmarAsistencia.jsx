import React from 'react';

export default class ConfirmarAsistencia extends React.Component {
    constructor(props) {
        super(props);
        this.onConfirm = this.onConfirm.bind(this);
    }

    onConfirm(event) {
      alert('yaaaay!');
      event.preventDefault();
    }

    componentDidMount() {
        // Input Lock
        $('textarea').blur(function () {
            $('#hire textarea').each(function () {
                const $this = $(this);
                if ( this.value !== '' ) {
                    $this.addClass('has-value');
                }
                else {
                    $this.removeClass('has-value');
                }
            });
        });

        $('#hire .field:first-child input').blur(function () {
            $('#hire .field:first-child input').each(function () {
                const $this = $(this);
                if ( this.value !== '' ) {
                    $this.addClass('has-value');
                }
                else {
                    $this.removeClass('has-value');
                }
            });
        });

        $('#hire .field:nth-child(2) input').blur(function () {
            $('#hire .field:nth-child(2) input').each(function () {
                const $this = $(this);
                if ( this.value !== '' ) {
                    $this.addClass('has-value');
                }
                else {
                    $this.removeClass('has-value');
                }
            });
        });
    }

    render() {
        return (
            <section id="hire" className="confirmar-asistencia flex-row col col-md-5 p-0 h-100 d-flex">
                <div className="align-self-center text-center w-100">
                    <h1>Confirmar asistencia</h1>
                
                    <form className="mx-auto" onSubmit={this.onConfirm}>
                        <div className="field name-box">
                            <input type="text" id="name" placeholder="Nombre y apellido"/>
                            <label htmlFor="name">Nombre</label>
                            <i className="icon material-icons">thumb_up</i>
                        </div>
                
                        <div className="field email-box">
                            <input type="text" id="email" placeholder="name@email.com"/>
                            <label htmlFor="email">Email</label>
                            <i className="icon material-icons">thumb_up</i>
                        </div>
                
                        <div className="field msg-box">
                            <textarea id="msg" rows="1" placeholder="Podés escribir un mensaje..."></textarea>
                            <label htmlFor="msg">Mensaje</label>
                            <i className="icon material-icons">thumb_up</i>
                        </div>

                        <div className="d-flex radio-box btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="d-flex flex-fill justify-content-center btn btn-secondary active">
                                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />
                                <span className="align-self-center">Asistir</span>
                            </label>
                            <label className="d-flex flex-fill justify-content-center btn btn-secondary">
                                <input type="radio" name="options" id="option2" autoComplete="off" />
                                <span className="align-self-center">No asistir</span>
                            </label>
                        </div>
                
                        <input className="button" type="submit" value="Enviar" />
                    </form>
                </div>

                <a href="#" className="d-lg-none d-xl-none hint-arrow up text-dark" onClick={() => $.fn.fullpage.moveSectionUp()}>
                    <i className="material-icons">arrow_upward</i>
                </a>

                <a href="#" className="d-lg-none d-xl-none hint-arrow down text-dark" onClick={() => $.fn.fullpage.moveSectionDown()}>
                    <i className="material-icons">arrow_downward</i>
                </a>
            </section>
        );
    }
}
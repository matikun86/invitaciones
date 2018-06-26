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
                $this = $(this);
                if ( this.value != '' ) {
                    $this.addClass('focused');
                    $('textarea + label + span').css({'opacity': 1});
                }
                else {
                    $this.removeClass('focused');
                    $('textarea + label + span').css({'opacity': 0});
                }
            });
        });

        $('#hire .field:first-child input').blur(function () {
            $('#hire .field:first-child input').each(function () {
                $this = $(this);
                if ( this.value != '' ) {
                    $this.addClass('focused');
                    $('.field:first-child input + label + span').css({'opacity': 1});
                }
                else {
                    $this.removeClass('focused');
                    $('.field:first-child input + label + span').css({'opacity': 0});
                }
            });
        });

        $('#hire .field:nth-child(2) input').blur(function () {
            $('#hire .field:nth-child(2) input').each(function () {
                $this = $(this);
                if ( this.value != '' ) {
                    $this.addClass('focused');
                    $('.field:nth-child(2) input + label + span').css({'opacity': 1});
                }
                else {
                    $this.removeClass('focused');
                    $('.field:nth-child(2) input + label + span').css({'opacity': 0});
                }
            });
        });
    }

    render() {
        return (
            <section id="hire" className="confirmar-asistencia d-flex flex-row col-5 p-0">
                <div className="align-self-center w-100">
                    <h1>Contact Me</h1>
                
                    <form onSubmit={this.onConfirm}>
                        <div className="field name-box">
                            <input type="text" id="name" placeholder="Who Are You?"/>
                            <label htmlFor="name">Name</label>
                            <span className="ss-icon">check</span>
                        </div>
                
                        <div className="field email-box">
                            <input type="text" id="email" placeholder="name@email.com"/>
                            <label htmlFor="email">Email</label>
                            <span className="ss-icon">check</span>
                        </div>
                
                        <div className="field msg-box">
                            <textarea id="msg" rows="1" placeholder="Your message goes here..."></textarea>
                            <label htmlFor="msg">Msg</label>
                            <span className="ss-icon">check</span>
                        </div>

                        <div className="d-flex radio-box btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="d-flex flex-fill justify-content-center btn btn-secondary active">
                                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />
                                <span className="align-self-center">Confirmar</span>
                            </label>
                            <label className="d-flex flex-fill justify-content-center btn btn-secondary">
                                <input type="radio" name="options" id="option2" autoComplete="off" />
                                <span className="align-self-center">No confirmar</span>
                            </label>
                        </div>
                
                        <input className="button" type="submit" value="Send" />
                    </form>
                </div>
            </section>     
        );
    }
}
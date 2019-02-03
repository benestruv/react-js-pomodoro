import React, { Component } from 'react';
import '../../public/scss/app.scss';



// Import des components
import Logo from './Logo';
import Increment from './Button/Increment';
import Decrement from './Button/Decrement';
import Toggle from './Button/Toggle';
import Modal from './Modal';

class App extends Component {
    constructor() {
        super();
        this.state = {
            time: 1200,
            isToggleOn: true,
            ModalHidden: true
        }
    
// Bind dans le constructor !!! On bind des fonctions, pas des components
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
    this.ToggleClick = this.ToggleClick.bind(this);
    this.CloseModal = this.CloseModal.bind(this);
    this.RestartModal = this.RestartModal.bind(this);



}
// Affichage du timer :
    TimerDisplay(time) {
        let minutes = Math.floor(time / 60); // 1200 / 60 = 20 minutes
        let secondes = ((time % 60)).toFixed(0); // 20 % 60 = les secondes
        return minutes + ":" + (secondes < 10 ? '0' : '') + secondes;
    }

// Fonctions
    Increment() {
        this.setState({
            time: this.state.time + 60
        });
    }

    Decrement() {
        this.setState({
            time: this.state.time - 60
        });
    }

    ToggleClick () {
        // Au clic, le statut du bouton doit changer de true à false
        this.setState(state => ({
            isToggleOn: !this.state.isToggleOn
        }));
        //Si le bouton est sur start
        if (this.state.isToggleOn === true) {
            // le décompte commence
            this.time = setInterval(() => {
                if (this.state.time === 0) { // Si le compteur est à zéro on l'arrête
                    clearInterval(this.time)
                    this.setState({
                        ModalHidden: !this.state.ModalHidden,
                    });
                return;
                }
                this.setState({
                    time: this.state.time - 1 // décompte
                })
            }, 1000)
        } else { // Si le bouton n'est pas start, on remet le compteur à Zéro
            clearInterval(this.time);
            this.setState({ time: 1200 })
            console.log("reset")
        }
    }
// Modal

CloseModal(){
    this.setState({ ModalHidden: false });
}

RestartModal(){
    this.setState({
        time: 1200,
    })
    this.timer = setInterval(() => {
        this.setState({
            time: this.state.time - 1,
            isToggleOn: false
        })
    }, 1000)
}

// Rendu
    render() {
        return (
            <div className="container">


                <Logo className="logo"/>

                <div id="timer">
                    {this.TimerDisplay(this.state.time)}
                </div>

                <div className="Boutons">
                    <Decrement onClick={this.Decrement} />
                    {!this.state.time && (<Modal displayed={this.state.ModalHidden} onClickClose={this.CloseModal} onClickRestart={this.RestartModal} />)}
                    <Toggle isToggleOn= {this.state.isToggleOn} onClick={this.ToggleClick} />
                    <Increment onClick={this.Increment} />
                </div>
            </div>
        );
    }

}

export default App
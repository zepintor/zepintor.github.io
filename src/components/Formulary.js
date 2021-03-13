import React, {Component} from "react";
import { Button, Input, Textarea } from "metro4-react";

export default class Formulary extends Component {
    state = {
        name: '',
        email: '',
        telephone: '',
        message: ''
    };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    formatTelephone = (e) => {
        var tel = e.target.value;
        if (tel.length === 0){
            tel = '(' + tel;
        } else if (tel.length === 3){
            tel = tel + ') ';
        } else if (tel.length === 9){
            if (tel["5"] != "9"){
                tel = tel + "-";
                e.target.maxLength = 14;
            }
        } else if (tel.length === 10){
            if (tel["5"] == "9"){
                tel = tel + "-";
                e.target.maxLength = 15;
            }
        }
        this.setState({
            [e.target.name]: tel
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var data = new FormData(e.target);
        var action = 'https://formspree.io/f/mdozalpk'
        fetch(action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <Input name="name"
                    prepend="Nome"
                    type="text"
                    value={this.state.name}
                    onChange={e => this.change(e)}
                    required
                />
                <Input name="email"
                    prepend="E-mail"
                    type="email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <Input name="telephone"
                    placeholder="(__) _____-____"
                    type="tel"
                    prepend="Telefone"
                    value={this.state.telephone}
                    onKeyPress={e => this.formatTelephone(e)}
                    onChange={e => this.change(e)}
                    required
                />
                <Textarea name="message"
                    placeholder="Escreva sua mensagem..."
                    value={this.state.message}
                    onChange={e => this.change(e)}
                    required
                />
                <Button title="Enviar"
                    cls="dark large"
                    type="submit"
                />
            </form>
        );
    }
}

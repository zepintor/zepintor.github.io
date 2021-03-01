import React, { Component } from 'react';
import { Input, Textarea, Button } from "metro4-react";

class Formulary extends Component {
    render() {
        return (
            <form className="w-75-md text-center" method="POST" action="/formulario">
                <Input prepend="Nome"
                cls="mt-3 mb-3"
                errorMessage="Eu preciso saber o seu nome..."
                required/>
                <Input prepend="E-mail"
                cls="mt-3 mb-3"
                type="email"/>
                <Input prepend="Telefone"
                cls="mt-3 mb-3"
                placeholder="(__) _____-____"
                type="tel"
                errorMessage="Como vou entrar em contato contigo?"
                required/>
                <Textarea placeholder="Sua mensagem..."
                cls="mt-3 mb-3"
                errorMessage="Faltou você escrever a mensagem..."
                required/>
                <Button type="submit" title="Enviar" cls="dark large mt-3 mr-2"/>
                <Button type="reset" title="Limpar" cls="large mt-3 ml-2"/>
            </form>
        );
    }
}
export default Formulary;
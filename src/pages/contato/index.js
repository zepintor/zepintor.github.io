import React, { Component } from 'react';
import { Grid } from 'metro4-react'
import Reception from '../../components/Reception';
import Formulary from '../../components/Formulary';

class Contato extends Component {
    render() {
        return (
            <>
                <Reception title="Contato"
                    subtitle="Dúvidas? Deixe uma mensagem." />
                <div className="h-75 bg-white d-flex flex-align-center flex-justify-center">
                    <Formulary />
                </div>
            </>
        )
    }
}
export default Contato;
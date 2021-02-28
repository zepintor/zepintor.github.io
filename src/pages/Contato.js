import React, { Component } from 'react';
import { Grid } from 'metro4-react'
import Reception from '../components/Reception';

class Contato extends Component {
    render() {
        return (
            <Grid className="h-100 d-flex flex-align-center flex-justify-center">
                <Reception title="Contato"
                subtitle="Dúvidas? Deixe uma mensagem."/>
            </Grid>
        )
    }
}
export default Contato;
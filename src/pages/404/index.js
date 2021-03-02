import React, { Component } from 'react';
import { Grid } from "metro4-react";
import Reception from '../../components/Reception';

class NotFound extends Component {
    title = "Erro 404";
    subtitle = "A página que você visitou não existe, volte ao início ou contate o administrador."
    render() {
        return (
            <Grid className="h-100 d-flex flex-align-center flex-justify-center">
                <Reception title={this.title}
                    subtitle={this.subtitle} />
            </Grid>
        )
    }
}
export default NotFound;
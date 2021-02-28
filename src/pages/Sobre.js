import React, { Component } from 'react';
import { Grid } from 'metro4-react'
import Reception from '../components/Reception';

class Sobre extends Component {
    render() {
        return (
            <Grid className="h-100 d-flex flex-align-center flex-justify-center">
                <Reception title="Sobre"
                subtitle=""/>
            </Grid>
        )
    }
}
export default Sobre;
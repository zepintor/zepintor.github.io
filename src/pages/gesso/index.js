import React, { Component } from 'react';
import { Cell, Grid, Row } from 'metro4-react';
import Reception from '../../components/Reception';
import massa0 from '../../img/massa0.webp';
import massa1 from '../../img/massa1.webp';
import massa2 from '../../img/massa2.webp';
import massa3 from '../../img/massa3.webp';
import acabamento_fino0 from '../../img/acabamento_fino0.webp';
import acabamento_fino1 from '../../img/acabamento_fino1.webp';
import gesso0 from '../../img/gesso0.webp';
import gesso1 from '../../img/gesso1.webp';

class Gesso extends Component {
    render() {
        return (
            <>
                <Reception title="Gesso"
                        subtitle="Trabalhos com gesso e acabamento fino" />
                <div className="bg-white text-center text-leader pt-10 pb-10">
                    <Grid cls="container mx-auto">
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={massa0}></img>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={massa1}></img>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={massa2}></img>
                                    <span>Parte de trás da casa</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={massa3}></img>
                                    <span>Outro ângulo</span>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={acabamento_fino0}></img>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={acabamento_fino1}></img>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={gesso0}></img>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={gesso1}></img>
                                </div>
                            </Cell>
                        </Row>
                    </Grid>
                </div>
            </>
        );
    }
}
export default Gesso;

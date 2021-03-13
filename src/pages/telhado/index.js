import React, { Component } from 'react';
import { Cell, Grid, Row } from 'metro4-react';
import Reception from '../../components/Reception';
import pintura_telhado0 from '../../img/pintura_telhado0.webp';
import pintura_telhado1 from '../../img/pintura_telhado1.webp';
import lavacao_telhado0 from '../../img/lavacao_telhado0.webp';
import lavacao_telhado1 from '../../img/lavacao_telhado1.webp';
import lavacao_telhado_2 from '../../img/lavacao_telhado_2.jpeg';
import lavacao_telhado_3 from '../../img/lavacao_telhado_3.jpeg';

class Telhado extends Component {
    render() {
        return (
            <>
                <Reception title="Telhado"
                        subtitle="Lavação e pinturas de telhado" />
                <div className="bg-white text-center text-leader pt-10 pb-10">
                    <Grid class="container">
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={pintura_telhado0}></img>
                                    <span>Pintura em telhado</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={pintura_telhado1}></img>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={lavacao_telhado0}></img>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={lavacao_telhado1}></img>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={lavacao_telhado_2}></img>
                                    <span>Telhado antes da lavação</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={lavacao_telhado_3}></img>
                                    <span>Telhado após a lavação</span>
                                </div>
                            </Cell>
                        </Row>
                    </Grid>
                </div>
            </>
        )
    }
}
export default Telhado;

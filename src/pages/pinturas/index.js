import React, { Component } from 'react';
import { Cell, Grid, Row } from 'metro4-react';
import Reception from '../../components/Reception';
import casa_amarela3 from '../../img/casa_amarela3.webp';
import casa_amarela1 from '../../img/casa_amarela1.webp';
import casa_amarela2 from '../../img/casa_amarela2.webp';
import casa_amarela0 from '../../img/casa_amarela0.webp';
import salao_antes from '../../img/salao_antes.webp';
import salao_depois from '../../img/salao_depois.webp';
import predio0 from '../../img/predio0.webp';
import predio1 from '../../img/predio1.webp';
import impermeabilizacao_tijolos from '../../img/impermeabilizacao_tijolos.webp';

class Pinturas extends Component {
    render() {
        return (
            <>
                <Reception title="Pinturas"
                        subtitle="As cores mais atraentes" />
                <div className="bg-white text-center text-leader pt-10 pb-10">
                    <Grid class="container">
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={casa_amarela3}></img>
                                    <span>Detalhes em amarelo na casa</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={casa_amarela1}></img>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={casa_amarela2}></img>
                                    <span>Pintura feita no portão</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={casa_amarela0}></img>
                                    <span>Corrimões da sacada</span>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={salao_antes}></img>
                                    <span>Salão da barbearia antes do serviço</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={salao_depois}></img>
                                    <span>Salão após a pintura. Cores escolhidas pela arquiteta</span>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={predio0}></img>
                                    <span>Prédio em início de obra</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={predio1}></img>
                                    <span>Prédio após a pintura</span>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={impermeabilizacao_tijolos}></img>
                                    <span>Impermeabilização de tijolos</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                </div>
                            </Cell>
                        </Row>
                    </Grid>
                </div>
            </>
        )
    }
}
export default Pinturas;

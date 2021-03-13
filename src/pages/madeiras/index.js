import React, { Component } from 'react';
import { Cell, Grid, Row } from "metro4-react";
import Reception from "../../components/Reception";
import deck0 from "../../img/deck0.webp";
import deck1 from "../../img/deck1.webp";
import deck2 from "../../img/deck2.webp";
import deck3 from "../../img/deck3.webp";
import teto_sujo from "../../img/teto_madeira_suja.webp";
import teto_lavado from "../../img/teto_madeira_lavada.webp";
import verniz0 from "../../img/verniz0.webp";
import verniz1 from "../../img/verniz1.webp";
import verniz2 from "../../img/verniz2.webp";
import verniz3 from "../../img/verniz3.webp";
import casa_madeira from "../../img/casa_madeira0.webp";
import pintura_madeira from "../../img/pintura_na_madeira.webp";

class Madeiras extends Component {
    render() {
        return (
            <>
                <Reception title="Madeira"
                        subtitle="Pinturas com verniz e osmocolor" />
                <div className="bg-white text-center text-leader pt-10 pb-10">
                    <Grid cls="container mx-auto">
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={deck0}></img>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={deck1}></img>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={deck2}></img>
                                    <span>Deck de madeira pintado com Osmocolor</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={deck3}></img>
                                    <span>Além do deck, os móveis também foram pintados.</span>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={teto_sujo}></img>
                                    <span>Teto antes da lavação e pintura.</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={teto_lavado}></img>
                                    <span>Teto após a lavação e pintura</span>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={verniz0}></img>
                                    <span>Renovação do verniz em móveis de madeira.</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={verniz1}></img>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={verniz2}></img>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={verniz3}></img>
                                </div>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={casa_madeira}></img>
                                    <span>Casa de madeira</span>
                                </div>
                            </Cell>
                            <Cell className="cell-md-6">
                                <div className="img-container drop-shadow">
                                    <img src={pintura_madeira}></img>
                                    <span>Pintura na madeira</span>
                                </div>
                            </Cell>
                        </Row>
                    </Grid>
                </div>
            </>
        )
    }
}
export default Madeiras;

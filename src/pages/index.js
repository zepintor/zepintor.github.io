import React, { Component } from 'react';
import Reception from '../components/Reception';
import Card from "../components/Card";

class Home extends Component {
    render() {
        return (
            <>
                <Reception title="Pinturas em Indaial"
                    subtitle="Orçamento sem compromisso" />
                <div className="container-fluid bg-white d-flex flex-align-center flex-justify-center pt-10 pb-10">
                    <div className="container">
                        <div className="feature-table row">
                            <>
                                <Card title="Capricho"
                                    subtitle="Serviços com bom acabamento"
                                    button_caption="Mostre-me"
                                    background="blue"
                                    icon="mif-hammer"
                                    button_background="info"
                                    linkTo="/madeiras"
                                />

                                <Card title="Visão"
                                    subtitle="Boas ideias para cores"
                                    button_caption="Quero ver"
                                    background="steel"
                                    icon="mif-eye"
                                    button_background="secondary"
                                    linkTo="/pinturas"
                                />

                                <Card title="Nota fiscal"
                                    subtitle="Para empresas"
                                    button_caption="Como assim?"
                                    background="amber"
                                    icon="mif-barcode"
                                    button_background="yellow"
                                    linkTo="/contato"
                                />
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Home;

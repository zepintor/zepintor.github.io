import React, { Component } from 'react';
import { Grid } from 'metro4-react'
import Reception from '../components/Reception';
import Profile from '../img/perfil.webp';

class Sobre extends Component {
    render() {
        return (
            <>
                <Grid className="h-100 d-flex flex-align-center flex-justify-center">
                    <Reception title="Sobre Mim"
                        subtitle />
                </Grid>
                <Grid className="h-100 bg-white">
                    <div className="text-center" style={{"bottom":"130px"}}>
                        <img src={Profile} className="mw-25-md drop-shadow img-thumbnail mx-auto"
                        alt="Homem segurando um saxofone"
                        loading="lazy" />
                        <blockquote>
                            <p className="text-leader">A música é a rainha das artes, a pintura é a princesa.</p>
                            <small>José Augusto de Campos</small>
                        </blockquote>
                        <div className="remark alert container">
                            <p className="text-just text-leader2">Olá meu nome é José Augusto, sou músico, pai de família e pintor, atuo no ramo há mais de vinte anos e gosto muito do que faço. Você pode me chamar de Zé até porque o pessoal da região sempre me chamou assim.</p>
                        </div>
                    </div>
                </Grid>
            </>
        )
    }
}
export default Sobre;
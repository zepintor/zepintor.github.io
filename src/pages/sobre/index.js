import React, { Component } from 'react';
import { Grid } from 'metro4-react'
import Reception from '../../components/Reception';
import Profile from '../../img/perfil.webp';

class Sobre extends Component {
    render() {
        return (
            <>
                <Reception title="Sobre Mim"
                    subtitle />
                <div className="bg-white">
                    <div className="text-center" style={{ "bottom": "130px" }}>
                        <div className="mw-50-sm mw-25-md mw-25-lg mw-75 mx-auto">
                            <img src={Profile} className="drop-shadow img-thumbnail"
                                alt="Homem segurando um saxofone" />
                        </div>
                        <blockquote>
                            <p className="text-leader">A música é a rainha das artes, a pintura é a princesa.</p>
                            <small>José Augusto de Campos</small>
                        </blockquote>
                        <div className="remark alert container">
                            <p className="text-just text-leader2">Olá meu nome é José Augusto, sou músico, pai de família e pintor, atuo no ramo há mais de vinte anos e gosto muito do que faço. Você pode me chamar de Zé até porque o pessoal da região sempre me chamou assim.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Sobre;
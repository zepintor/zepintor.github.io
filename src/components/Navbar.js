import React, { Component } from 'react';
import { AppBar, AppBarItem, AppBarMenu } from 'metro4-react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid pos-fixed fixed-top fg-white bg-gradient z-top">
                <AppBar cls="bg-transparent container pos-relative" hamburgerTheme="white"
                expandPoint="lg">
                    <Link to="/" className="fg-white">
                        <AppBarItem isBrand cls="mr-auto">
                            <span className="text-leader text-cap">Zé Pintor</span>
                        </AppBarItem>
                    </Link>
                    <AppBarMenu cls="text-upper ml-auto">
                        <Link to="/">
                            <AppBarItem>Início</AppBarItem>
                        </Link>
                        <Link to="/contato">
                            <AppBarItem>Contato</AppBarItem>
                        </Link>
                        <Link to="/sobre">
                            <AppBarItem>Sobre</AppBarItem>
                        </Link>
                        <Link to="/madeiras">
                            <AppBarItem>Madeiras</AppBarItem>
                        </Link>
                        <Link to="/pinturas">
                            <AppBarItem>Pinturas</AppBarItem>
                        </Link>
                        <Link to="/telhado">
                            <AppBarItem>Telhado</AppBarItem>
                        </Link>
                        <Link to="/gesso">
                            <AppBarItem>Gesso</AppBarItem>
                        </Link>
                    </AppBarMenu>
                </AppBar>
            </div >
        )
    }
}
export default Navbar;
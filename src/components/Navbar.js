import React, { Component } from 'react';
import { AppBar, AppBarItem, AppBarMenu } from 'metro4-react';
import '../css/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid bg-gradient pos-fixed fixed-top">
                <AppBar cls="bg-transparent fg-white container pos-relative">
                    <AppBarItem>
                        <span className="text-leader">Zé Pintor</span>
                    </AppBarItem>
                    <AppBarMenu cls="ml-auto text-upper">
                        <AppBarItem>Início</AppBarItem>
                        <AppBarItem>Contato</AppBarItem>
                        <AppBarItem>Sobre</AppBarItem>
                    </AppBarMenu>
                </AppBar>
            </div>
        )
    }
}
export default Navbar;
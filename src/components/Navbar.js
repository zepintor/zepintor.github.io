import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {AppBar, AppBarItem, AppBarMenu} from 'metro4-react';

class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <AppBarItem>
                    <span className="text-leader">Zé Pintor</span>
                </AppBarItem>
                <AppBarMenu>
                    <AppBarItem>Início</AppBarItem> 
                    <AppBarItem>Contato</AppBarItem> 
                    <AppBarItem>Sobre</AppBarItem> 
                </AppBarMenu>
            </AppBar>
        )
    }
}
export default Navbar;

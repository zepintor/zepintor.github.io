import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/index';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/body.css';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/">
                        <Home />
                        <Contato />
                        <Sobre />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render( <App />, document.querySelector( '#root' ) );
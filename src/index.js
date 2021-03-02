import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/index';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/body.css';
import Contato from './pages/contato/';
import Sobre from './pages/sobre/';
import NotFound from './pages/404/';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Madeiras from './pages/madeiras';

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <Contato />
                        <Sobre />
                    </Route>
                    <Route exact path="/contato">
                        <Contato />
                    </Route>
                    <Route exact path="/sobre">
                        <Sobre />
                    </Route>
                    <Route exact path="/madeiras">
                        <Madeiras/>
                    </Route>
                    <Route exact path="/pinturas">

                    </Route>
                    <Route exact path="/telhado">

                    </Route>
                    <Route exact path="/gesso">

                    </Route>
                    <Route exact path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
                <WhatsAppButton/>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
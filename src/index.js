import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"

class App extends Component {
    render() {
        return (
            <ChakraProvider>
                <h1>Teste</h1>
            </ChakraProvider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
import React, { Component } from 'react';

class Footer extends Component {
    currentYear = new Date().getFullYear();
    render() {
        return (
            <footer className="bg-dark fg-gray p-1 text-center">
                Cézar Augusto de Campos &#169;&nbsp;{this.currentYear}
            </footer>
        );
    }
}
export default Footer
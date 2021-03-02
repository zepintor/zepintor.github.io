import React, { Component } from 'react';
import { Icon } from "metro4-react";

class WhatsAppButton extends Component {
    render() {
        return (
            <a  href="https://wa.me/5547991673021"
                target="_blank"
                className="action-button bg-green fg-white pos-fixed pos-bottom-right mb-6 mr-6 ani-horizontal"
                rel="noreferrer">
                <Icon name="phone" size="2x"/>
            </a>
        );
    }
}
export default WhatsAppButton;
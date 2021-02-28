import { InfoPanelTitle } from 'metro4-react';
import React, { Component } from 'react';

class Reception extends Component {
    render() {
        return (
            <div className="display4 fg-white text-center">
                <span className="reduce-3 enlarge-1-md">{this.props.title}</span>
                <h4>{this.props.subtitle}</h4>
            </div>
        )
    }
}
export default Reception;
import React, { Component } from 'react';

class Reception extends Component {
    render() {
        return (
            <div className="h-100 d-flex flex-align-center flex-justify-center">
                <div className="display4 fg-white text-center">
                    <span className="reduce-3 enlarge-1-md">{this.props.title}</span>
                    <h4>{this.props.subtitle}</h4>
                </div>
            </div>
        )
    }
}
export default Reception;
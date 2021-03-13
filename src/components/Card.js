import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        return (
            <div className="cell-md-4">
                <div className="info-panel no-overflow shadow-3">
                    <div className={`info-panel-header fg-white bg-${this.props.background}`}>{this.props.title}</div>
                    <div className="info-panel-content">
                        <div className="mx-10 my-6">
                            <span className={`${this.props.icon} mif-8x fg-${this.props.background}`}></span>
                        </div><span className="text-leader2">{this.props.subtitle}</span>
                    </div>
                    <div className="info-panel-footer">
                        <Link to={this.props.linkTo}
                            className={`button large ${this.props.button_background}`}>
                            {this.props.button_caption}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;

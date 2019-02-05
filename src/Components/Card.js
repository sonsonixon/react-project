import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
            	<div className="card-header">
            		<h4 className="card-title">{this.props.cardTitle}</h4>
            		<p className="card-description">{this.props.cardDescription}</p>
            	</div>
            	<div className="card-body">
            		{this.props.children}
            	</div>
            </div>
        );
    }
}

export default Card;








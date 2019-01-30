import React, { Component } from 'react';

// Reactstrap Component
import { Route } from 'react-router-dom';

class Collapse extends Component {
    render() {
        return (
            <Route path={this.props.to} children={({match}) => (
             	<li className={match ? 'active' : ''}>
	                <a data-toggle="collapse" href={'#' + this.props.id}>
	                    <i className={this.props.icon}></i>
	                    <strong>{this.props.title}</strong>
	                    <b className="caret"></b>
	                </a>
	                <div className="collapse" id={this.props.id}>
	                    <ul className="nav">
	                    {this.props.children}
	                    </ul>
	                </div>
	            </li>
	            )}
			/>
        );
    }
}

export default Collapse;








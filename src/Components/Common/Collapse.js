import React, { Component } from 'react';

// Reactstrap Component
import { UncontrolledCollapse } from 'reactstrap';

class Collapse extends Component {
    render() {
        return (
            <li>
				<a href="#Collapse" id={this.props.id}>
			 		<i className={this.props.icon}></i>
						{this.props.name}
			    	<p className="caret"></p>
			 	</a>
			 	<UncontrolledCollapse toggler={this.props.id}>
			 		<ul className="nav">
			        	{this.props.children}
			        </ul>
			 	</UncontrolledCollapse>
			</li>
        );
    }
}

export default Collapse;








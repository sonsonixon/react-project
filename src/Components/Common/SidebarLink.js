import React, { Component } from 'react';
import { Route,
		 Link } from "react-router-dom";

class SidebarLink extends Component {
    render() {
        return (
            <Route path={this.props.to} exact={this.props.exact} children={({match}) => (
				<li className={match ? 'active' : ''}>
					<Link to={this.props.to}>
						{this.props.children}
					</Link>
				</li>
				)}
			/>
        );
    }
}

export default SidebarLink;

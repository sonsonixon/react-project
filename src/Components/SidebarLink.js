import React, { Component } from 'react';
import { 
	Route,
	NavLink
} from "react-router-dom";

class SidebarNavLink extends Component {
    render() {
        return (
            <Route path={this.props.to} exact={this.props.exact} children={({match}) => (
				<li className={match ? 'nav-item active' : 'nav-item'}>
					<NavLink to={this.props.to}>
						<i className={this.props.icon}></i>
						<strong>{this.props.title}</strong>
					</NavLink>
				</li>
				)}
			/>
        );
    }
}

export default SidebarNavLink;

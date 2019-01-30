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
						<span className="sidebar-mini-icon">
							{this.props.icon}
						</span>
						<span className="sidebar-normal">{this.props.title}</span>
					</NavLink>
				</li>
				)}
			/>
        );
    }
}

export default SidebarNavLink;

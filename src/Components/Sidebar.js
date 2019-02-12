import React, { Component  } from 'react';
import { NavLink } from "react-router-dom";

import Collapse from './Collapse';
import SidebarLink from './SidebarLink';
import CollapseLink from './CollapseLink';

/*
<SidebarLink to="/redux/counter" exact={true} icon="nc-icon nc-atom" title="Counter" />
*/

class Sidebar extends Component {
    render() {
        return (
        	<div className="sidebar" data-color="brown" data-active-color="danger">
	            <div className="logo text-center">
                	<NavLink to="/" className="simple-text logo-normal">
	                    REACT PROJECT
	                </NavLink>
	            </div>
	            <div className="sidebar-wrapper ps-container ps-theme-default ps-active-x ps-active-y">
	                <ul className="nav">
	                 	<SidebarLink to="/" exact={true} icon="fa fa-fw fa-dashboard" title="Dashboard" />
	                 	<Collapse to="/users" title="Users" icon="fa fa-fw fa-users" id="usersCollapse">
							<CollapseLink to="/users/create" exact={true} icon="CU" title="CREATE USER" />
							<CollapseLink to="/users" exact={true} icon="L" title="LIST" />
						</Collapse>
	                 	<SidebarLink to="/todos" exact={false} icon="nc-icon nc-time-alarm" title="Todos" />
	                </ul>
	            </div>
	        </div>
        );
    }
}

export default Sidebar;




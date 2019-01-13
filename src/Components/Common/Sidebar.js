import React, { Component  } from 'react';
import { Link } from "react-router-dom";

import Collapse from './Collapse';
import SidebarLink from './SidebarLink';

class Sidebar extends Component {
	
    render() {
        return (
        	<div className="sidebar" data-color="black" data-active-color="danger">
	            <div className="logo text-center">
                	<Link to="/" className="simple-text logo-normal">
	                    REACT PROJECT
	                </Link>
	            </div>
	            <div className="sidebar-wrapper">
	                <ul className="nav">
	                 	<SidebarLink to="/" exact={true}>
	                 		<i className="nc-icon nc-bank"></i>
	                 		Dashboard
	                 	</SidebarLink>
	                 	<Collapse id="redux" icon="nc-icon nc-atom" name="Redux">
	                 		<SidebarLink to="/redux/counter" exact={true}>
				        		<i className="fa fa-fw fa-clock-o"></i>
			         			Counter
				         	</SidebarLink>
	                 	</Collapse>
	                 	<Collapse id="users" icon="fa fa-users fa-fw" name="Users">
	                 		<SidebarLink to="/users/create" exact={true}>
				        		<span className="sidebar-mini-icon">
				         			<i className="fa fa-user-plus fa-fw"></i>
				     			</span>
				         		<span className="sidebar-normal">Create</span>
				         	</SidebarLink>
				         	<SidebarLink to="/users" exact={true}>
				         		<i className="fa fa-fw fa-list"></i>
				         		List
				         	</SidebarLink>
	                 	</Collapse>             	
	                </ul>
	            </div>
	        </div>
        );
    }
}

export default Sidebar;




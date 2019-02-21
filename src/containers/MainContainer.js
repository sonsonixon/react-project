import React, { Component } from 'react';

// Components
import Sidebar from '../components/Sidebar';
import Navbar  from '../components/Navbar';
import Footer  from '../components/Footer';

class Main extends Component {
    render() {
        return (
        	<div className="wrapper">
        		<Sidebar />
        		<div className="main-panel">
        			<Navbar />
	        		<div className="content">
	        			{this.props.children}
	        		</div>
	        		<Footer />
        		</div>
        	</div>
        );
    }
}

export default Main;

import React, { Component } from 'react';

// Components
import Sidebar from './Components/Common/Sidebar';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';

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

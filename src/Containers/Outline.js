import React, { Component } from 'react';

class Outline extends Component {
    render() {

        return (
        	<div className="wrapper login-page">
        		<nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
				    <div className="container">
				      	<div className="navbar-wrapper">
					        <div className="navbar-toggle">
					          	<button type="button" className="navbar-toggler">
						            <span className="navbar-toggler-bar bar1"></span>
						            <span className="navbar-toggler-bar bar2"></span>
						            <span className="navbar-toggler-bar bar3"></span>
					          	</button>
					        </div>
					        <span className="navbar-brand">React Project 2.0</span>
				      	</div>
				      	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
					        <span className="navbar-toggler-bar navbar-kebab"></span>
					        <span className="navbar-toggler-bar navbar-kebab"></span>
					        <span className="navbar-toggler-bar navbar-kebab"></span>
				      	</button>
				      	<div className="collapse navbar-collapse justify-content-end" id="navigation">
					        <ul className="navbar-nav">
					          	<li className="nav-item">
						            <a href="#/" className="nav-link">
						              	<i className="nc-icon nc-settings"></i> Contact Administrator
						            </a>
					          	</li>
					        </ul>
				      	</div>
				    </div>
				</nav>
				<div className="full-page section-image" filter-color="black">
	        		<div className="content">
	        			<div className="container">
	    					{this.props.children}
	    				</div>
	        		</div>
	        		<footer className="footer footer-black  footer-white ">
				        <div className="container-fluid">
				          	<div className="row">
					            <nav className="footer-nav">
					              	<ul>
						                <li>
						                  	<a href="#/">Credits</a>
						                </li>
						                <li>
						                  	<a href="#/">Licenses</a>
						                </li>
						                <li>
						                  	<a href="#/">Portal</a>
						                </li>
						                <li>
						                  	<a href="#/">Template</a>
						                </li>
					              	</ul>
					            </nav>
					            <div className="credits ml-auto">
					              	<span className="copyright">
					                	© 2019 made by sonsonixon
					              	</span>
					            </div>
				          	</div>
				        </div>
			      	</footer>
			      	<div className="full-page-background" style={{backgroundImage: `url('/assets/img/react.png')`}}></div>
        		</div>
        	</div>
        );
    }
}

export default Outline;

import React, { Component } from 'react';

const images = require.context('../../public/assets/img', true);

const nazarick = images('./nazarick.jpg');

class Outline extends Component {
    render() {
    	const background = {
    		backgroundImage: `url(${nazarick})`
    	}
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
				        <a className="navbar-brand" href="#pablo">Paper Dashboard 2 PRO</a>
				      </div>
				      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
				        <span className="navbar-toggler-bar navbar-kebab"></span>
				        <span className="navbar-toggler-bar navbar-kebab"></span>
				        <span className="navbar-toggler-bar navbar-kebab"></span>
				      </button>
				      <div className="collapse navbar-collapse justify-content-end" id="navigation">
				        <ul className="navbar-nav">
				          <li className="nav-item">
				            <a href="../dashboard.html" className="nav-link">
				              <i className="nc-icon nc-layout-11"></i> Dashboard
				            </a>
				          </li>
				          <li className="nav-item ">
				            <a href="register.html" className="nav-link">
				              <i className="nc-icon nc-book-bookmark"></i> Register
				            </a>
				          </li>
				          <li className="nav-item  active ">
				            <a href="login.html" className="nav-link">
				              <i className="nc-icon nc-tap-01"></i> Login
				            </a>
				          </li>
				          <li className="nav-item ">
				            <a href="user.html" className="nav-link">
				              <i className="nc-icon nc-satisfied"></i> User
				            </a>
				          </li>
				          <li className="nav-item ">
				            <a href="lock.html" className="nav-link">
				              <i className="nc-icon nc-key-25"></i> Lock
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
					                  <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>
					                </li>
					                <li>
					                  <a href="http://blog.creative-tim.com/" target="_blank">Blog</a>
					                </li>
					                <li>
					                  <a href="https://www.creative-tim.com/license" target="_blank">Licenses</a>
					                </li>
					              </ul>
					            </nav>
					            <div className="credits ml-auto">
					              <span className="copyright">
					                © 2019, made with <i className="fa fa-heart heart"></i> by Creative Tim
					              </span>
					            </div>
					          </div>
					        </div>
				      	</footer>
				      	<div class="full-page-background" style={background}></div>
        		</div>
        	</div>
        );
    }
}

export default Outline;

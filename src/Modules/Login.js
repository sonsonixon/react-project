import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 ml-auto mr-auto card-login">
            	<div className="card">
	            	<div className="card-header text-center">
	            		<h5 className="card-title">LOGIN</h5>
	            	</div>
	            	<div className="card-body">
	            		<div className="input-group">
		                    <div className="input-group-prepend">
		                      	<span className="input-group-text">
		                        	<i className="nc-icon nc-single-02"></i>
		                      	</span>
		                    </div>
		                    <input type="text" className="form-control" placeholder="First Name..." />
	                  	</div>
	                  	<div className="input-group">
	                    	<div className="input-group-prepend">
		                      	<span className="input-group-text">
		                        	<i className="nc-icon nc-key-25"></i>
		                      	</span>
	                    	</div>
	                    	<input type="password" placeholder="Password" className="form-control"/>
	                  	</div>
	            	</div>
	            	<div className="card-footer ">
	                  	<button type="button" className="btn btn-warning btn-round btn-block mb-3">Login</button>
	                </div>
	            </div>
            </div>
        );
    }
}

export default Login;

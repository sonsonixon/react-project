import React, { Component } from 'react';

import LoginForm from '../Components/Forms/LoginForm';

class Login extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(values) {
		console.log(values);
	}
	
    render() {
        return (
            <div className="col-lg-4 col-md-6 ml-auto mr-auto card-login">
            	<div className="card">
	            	<div className="card-header text-center">
	            		<img src="/assets/img/logo.svg" width="100" alt="Logo" />
	            	</div>
	            	<div className="card-body">
	            		<LoginForm onSubmit={this.handleSubmit} />
	            	</div>
	            </div>
            </div>
        );
    }
}

export default Login;

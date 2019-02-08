import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.handleOnBlurUSERNAME = this.handleOnBlurUSERNAME.bind(this);
		this.handleOnBlurPASSWORD = this.handleOnBlurPASSWORD.bind(this);
	}

	handleOnBlurUSERNAME(e) {
		console.log(e.target.value);
	}

	handleOnBlurPASSWORD(e) {
		console.log(e.target.value);
	}

	render() {

		const { handleSubmit } = this.props;

		return (
			<form onSubmit={ handleSubmit }>
				<div className="input-group">
					<div className="input-group-prepend">
					  	<span className="input-group-text">
					    	<i className="nc-icon nc-single-02"></i>
					  	</span>
					</div>
					<Field
						name="username"
						component="input" 
						type="text"
						className="form-control" 
						placeholder="Username..." 
						onBlur={this.handleOnBlurUSERNAME}
					/>
				</div>
				<div className="input-group">
					<div className="input-group-prepend">
					  	<span className="input-group-text">
					    	<i className="nc-icon nc-key-25"></i>
					  	</span>
					</div>
					<Field
						name="password"
						component="input"
						type="password" 
						className="form-control"
						placeholder="Password..." 
						onBlur={this.handleOnBlurPASSWORD}
					/>
				</div>
				<div className="form-group pt-3">
					<button 
						type="submit" 
						className="btn btn-danger btn-round btn-block mb-3"
					>
						Login
					</button>
				</div>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

LoginForm = reduxForm({
	form: 'login'
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
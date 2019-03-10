import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// redux form
import { Field, reduxForm } from 'redux-form';

// classnames
import classnames from 'classnames';

// middlewares
import {
    handleSetForm,
    handleFormDestroy,
} from '../../../Redux/Middlewares/UiMiddleware';

import {
	fetchUser,
} from '../../../Redux/Middlewares/UsersMiddleware';

// action creators
import {
	hasSuccessFIRSTNAME,
	clearFIRSTNAME,

	hasSuccessMIDDLENAME,
	clearMIDDLENAME,

	hasSuccessLASTNAME,
	clearLASTNAME,

	hasSuccessUSERNAME,
	clearUSERNAME,

	hasSuccessPASSWORD,
	clearPASSWORD,

	hasSuccessSTATUS,
	clearSTATUS,

	hasSuccessROLE,
	clearROLE,
} from '../../../Redux/ActionCreators/UsersActions';

import {
	destroyDataUsers,
} from '../../../Redux/ActionCreators/UiActions';

class updateUserForm extends Component {
	constructor(props) {
		super(props);

		this.handleValidateForm = this.handleValidateForm.bind(this);

		this.handleOnBlurFIRSTNAME = this.handleOnBlurFIRSTNAME.bind(this);
		this.handleOnBlurMIDDLENAME = this.handleOnBlurMIDDLENAME.bind(this);
		this.handleOnBlurLASTNAME 	= this.handleOnBlurLASTNAME.bind(this);
		this.handleOnBlurUSERNAME 	= this.handleOnBlurUSERNAME.bind(this);
		this.handleOnBlurPASSWORD 	= this.handleOnBlurPASSWORD.bind(this);
		this.handleOnBlurSTATUS 	= this.handleOnBlurSTATUS.bind(this);
		this.handleOnBlurROLE 		= this.handleOnBlurROLE.bind(this);

	}

	componentDidMount() {
		const { uuid, handleSetForm, form, fetchUser } = this.props;
		Promise.all([
			handleSetForm(form),
			fetchUser(uuid),
		])
		.then(() => {
			this.handleValidateForm();
		})
	}

	componentWillUnmount() {
		const { handleFormDestroy, destroyDataUsers } = this.props;
		Promise.all([
			handleFormDestroy(),
			destroyDataUsers(),
		])
	}

	handleValidateForm() {
		Object.keys(this.props.users).forEach(key => {
			switch(key) {
				case 'first_name':
					this.props.hasSuccessFIRSTNAME();
					break;
				case 'middle_name':
					this.props.hasSuccessMIDDLENAME();
					break;
				case 'last_name':
					this.props.hasSuccessLASTNAME();
					break;
				case 'username':
					this.props.hasSuccessUSERNAME();
					break;
				case 'role':
					this.props.hasSuccessROLE();
					break;
				case 'status':
					this.props.hasSuccessSTATUS();
					break;
				default:
					// default
			}
		})
	}

	handleOnBlurFIRSTNAME(e) {
		let value = e.target.value;
		const { hasSuccessFIRSTNAME, clearFIRSTNAME } = this.props;
		if(value) {
			hasSuccessFIRSTNAME();
		} else {
			clearFIRSTNAME();
		}
	}

	handleOnBlurMIDDLENAME(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessMIDDLENAME();
		} else {
			this.props.clearMIDDLENAME();
		}
	}

	handleOnBlurLASTNAME(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessLASTNAME();
		} else {
			this.props.clearLASTNAME();
		}
	}

	handleOnBlurUSERNAME(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessUSERNAME();
		} else {
			this.props.clearUSERNAME();
		}
	}

	handleOnBlurPASSWORD(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessPASSWORD();
		} else {
			this.props.clearPASSWORD();
		}
	}

	handleOnBlurSTATUS(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessSTATUS();
		} else {
			this.props.clearSTATUS();
		}
	}

	handleOnBlurROLE(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessROLE();
		} else {
			this.props.clearROLE();
		}
	}

	render() {
		const { 
			handleSubmit, isPosting,

			errorFIRSTNAME,
			successFIRSTNAME,
			validFIRSTNAME,
			errorMessageFIRSTNAME,

			errorMIDDLENAME,
			successMIDDLENAME,
			validMIDDLENAME,
			errorMessageMIDDLENAME,

			errorLASTNAME,
			successLASTNAME,
			validLASTNAME,
			errorMessageLASTNAME,

			errorUSERNAME,
			successUSERNAME,
			validUSERNAME,
			errorMessageUSERNAME,

			errorSTATUS,
			successSTATUS,
			validSTATUS,
			errorMessageSTATUS,

			errorROLE,
			successROLE,
			validROLE,
			errorMessageROLE,

		} = this.props;

		const firstnameClass = classnames({
			'form-group' : true,
			'has-danger' : !successFIRSTNAME && errorFIRSTNAME,
			'has-success': successFIRSTNAME && !errorFIRSTNAME,
		})

		const middlenameClass = classnames({
			'form-group' : true,
			'has-danger' : !successMIDDLENAME && errorMIDDLENAME,
			'has-success': successMIDDLENAME && !errorMIDDLENAME,
		})

		const lastnameClass = classnames({
			'form-group' : true,
			'has-danger' : !successLASTNAME && errorLASTNAME,
			'has-success': successLASTNAME && !errorLASTNAME,
		})

		const usernameClass = classnames({
			'form-group' : true,
			'has-danger' : !successUSERNAME && errorUSERNAME,
			'has-success': successUSERNAME && !errorUSERNAME,
		})

		const statusClass = classnames({
			'form-group' : true,
			'has-danger' : !successSTATUS && errorSTATUS,
			'has-success': successSTATUS  && !errorSTATUS,
		})

		const roleClass = classnames({
			'form-group' : true,
			'has-danger' : !successROLE && errorROLE,
			'has-success': successROLE  && !errorROLE,
		})

		return (
			<form onSubmit={ handleSubmit }>
				<div className="row">
					<div className="col-md-4">
						<div className={firstnameClass}>
							<label>First Name</label>
							<Field
	                        	name="first_name"
	                        	component="input"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurFIRSTNAME}
	                        />
						</div>
						<p className="text-danger"><strong>{errorMessageFIRSTNAME}</strong></p>
					</div>
					<div className="col-md-4">
						<div className={middlenameClass}>
							<label>Middle Name</label>
							<Field
	                        	name="middle_name"
	                        	component="input"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurMIDDLENAME}
	                        />
						</div>
						<p className="text-danger"><strong>{errorMessageMIDDLENAME}</strong></p>
					</div>
					<div className="col-md-4">
						<div className={lastnameClass}>
							<label>Last Name</label>
							<Field
	                        	name="last_name"
	                        	component="input"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurLASTNAME}
	                        />
						</div>
						<p className="text-danger"><strong>{errorMessageLASTNAME}</strong></p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className={usernameClass}>
							<label>Username</label>
							<Field
	                        	name="username"
	                        	component="input"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurUSERNAME}
	                        />
						</div>
						<p className="text-danger"><strong>{errorMessageUSERNAME}</strong></p>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Password</label>
							<Field
	                        	name="password"
	                        	component="input"
	                        	type="text"
	                        	className="form-control"
	                        	disabled={true}
	                        />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className={roleClass}>
							<label>Role</label>
							<Field
	                        	name="role"
	                        	component="select"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurROLE}
	                        >
	                        	<option defaultValue="">Select Role</option>
                        		<option value="admin">Admin</option>
							  	<option value="user">User</option>		
	                        </Field>
						</div>
						<p className="text-danger"><strong>{errorMessageROLE}</strong></p>
					</div>
					<div className="col-md-4">
						<div className={statusClass}>
							<label>Status</label>
							<Field
	                        	name="status"
	                        	component="select"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurSTATUS}
	                        >
	                        	<option defaultValue="">Select Status</option>
                        		<option value="active">Active</option>
							  	<option value="inactive">Inactive</option>		
	                        </Field>
						</div>
						<p className="text-danger"><strong>{errorMessageSTATUS}</strong></p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="form-group mt-4">
							<hr/>
							<button 
								type="submit"
								className="btn btn-block btn-round btn-danger btn-fill"
								disabled={  
                					!validFIRSTNAME  || !validMIDDLENAME ||
                					!validLASTNAME   || !validUSERNAME 	 ||
                					!validSTATUS     || !validROLE		 || isPosting 
                				}
							>
								{ isPosting ? <i className='fa fa-fw fa-spinner fa-spin'></i> : 'Submit'}
							</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	const ui = state.ui;
	const firstname  = state.users.firstname;
	const middlename = state.users.middlename;
	const lastname   = state.users.lastname;
	const username   = state.users.username;
	const password   = state.users.password;
	const status 	 = state.users.status;
	const role 	 	 = state.users.role;

	return {

		errorFIRSTNAME  	 : firstname.hasError,
		successFIRSTNAME 	 : firstname.hasSuccess,
		validFIRSTNAME  	 : firstname.isValid,
		errorMessageFIRSTNAME: firstname.errorMessage,

		errorMIDDLENAME  	  : middlename.hasError,
		successMIDDLENAME 	  : middlename.hasSuccess,
		validMIDDLENAME  	  : middlename.isValid,
		errorMessageMIDDLENAME: middlename.errorMessage,

		errorLASTNAME  	 	: lastname.hasError,
		successLASTNAME 	: lastname.hasSuccess,
		validLASTNAME  	 	: lastname.isValid,
		errorMessageLASTNAME: lastname.errorMessage,

		errorUSERNAME  	 	: username.hasError,
		successUSERNAME 	: username.hasSuccess,
		validUSERNAME  	 	: username.isValid,
		errorMessageUSERNAME: username.errorMessage,

		errorPASSWORD  	 	: password.hasError,
		successPASSWORD 	: password.hasSuccess,
		validPASSWORD  	 	: password.isValid,
		errorMessagePASSWORD: password.errorMessage,

		errorSTATUS  	  : status.hasError,
		successSTATUS 	  : status.hasSuccess,
		validSTATUS  	  : status.isValid,
		errorMessageSTATUS: status.errorMessage,

		errorROLE  	  	: role.hasError,
		successROLE 	: role.hasSuccess,
		validROLE  	  	: role.isValid,
		errorMessageROLE: role.errorMessage,

		// post loader
		isPosting: ui.isPosting,

		users: ui.data.users,

		// initialize form values
		initialValues: ui.data.users,
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	fetchUser,

	destroyDataUsers,

	handleSetForm,
    handleFormDestroy,

	hasSuccessFIRSTNAME,
	clearFIRSTNAME,

	hasSuccessMIDDLENAME,
	clearMIDDLENAME,

	hasSuccessLASTNAME,
	clearLASTNAME,

	hasSuccessUSERNAME,
	clearUSERNAME,

	hasSuccessPASSWORD,
	clearPASSWORD,

	hasSuccessSTATUS,
	clearSTATUS,

	hasSuccessROLE,
	clearROLE,

}, dispatch)

updateUserForm = reduxForm({
	form: 'updateUser',
	enableReinitialize : true
})(updateUserForm);

export default connect(mapStateToProps, mapDispatchToProps)(updateUserForm);
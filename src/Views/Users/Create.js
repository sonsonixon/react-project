import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import {
	getFirstname,
	getMiddlename,
	getLastname,
	getUsername,
	createUser,
	addClassFirstname
} from '../../Actions/UserActions';

const CreateUser = (props) => {
	
	let input;

	const {
		// States
		firstname,
		middlename,
		lastname,
		username,
		isLoading,
		firstnameStatus,
		// Functions
		getFirstname,
		getMiddlename,
		getLastname,
		getUsername,
		createUser,
		addClassFirstname
	} = props;

	const handleSubmit = (e) => {
		e.preventDefault();
		createUser(firstname, lastname, username);
	}

	const handleChangeFirstname = (e) => {
		e.preventDefault();
		input = e.target.value;
		getFirstname(input)
		addClassFirstname(input);
	}

	const handleChangeMiddlename = (e) => {
		e.preventDefault();
		input = e.target.value;
		getMiddlename(input);
	}

	const handleChangeLastname = (e) => {
		e.preventDefault();
		input = e.target.value;
		getLastname(input);
	}

	const handleChangeUsername = (e) => {
		e.preventDefault();
		input = e.target.value;
		getUsername(input);
	}

	const SubmitButton = (props) => {
		const isLoading = props.isLoading;
		if(isLoading){
			return (
				<button
					type="button" 
					disabled
					className="btn btn-round btn-wd btn-fill btn-danger"
				>
					<i className="fa fa-fw fa-spin fa-spinner"></i> Saving data...
				</button>
			)
		} else {
			return (
				<input
    				type="submit"
    				className="btn btn-round btn-wd btn-fill btn-danger"
    				value="Create"
    			/>
			)
		}
	}

	return (
		<div>
        	<div className="card">
              	<div className="card-header">
                	<h4 className="card-title">USER CREATION</h4>
                	<p>Lets create some users</p>
              	</div>
              	<div className="card-body">
              		<form onSubmit={handleSubmit}>
		                <div className="row">
		                	<div className="col-md-3">
		                      	<div className={firstnameStatus}>
			                        <label>First Name:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={handleChangeFirstname}
			                        	value={firstname}
			                        />
		                      	</div>
		                    </div>
		                    <div className="col-md-3">
		                      	<div className="form-group">
			                        <label>Middle Name:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={handleChangeMiddlename}
			                        	value={middlename}
			                        />
		                      	</div>
		                    </div>
		                    <div className="col-md-3">
		                      	<div className="form-group">
			                        <label>Last Name:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={handleChangeLastname}
			                        	value={lastname}
			                        />
		                      	</div>
		                    </div>
		                    <div className="col-md-3">
		                      	<div className="form-group">
			                        <label>Username:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={handleChangeUsername}
			                        	value={username}
			                        />
		                      	</div>
		                    </div>
		                </div>
		                <div className="row">
		                	<div className="col-md-12">
		                		<div className="form-group text-center">
		                			<SubmitButton isLoading={isLoading} />
	                			</div>
		                	</div>
		                </div>
	                </form>
              	</div>
            </div>
            <div className="card">
            	<div className="card-body">
            		
            	</div>
            </div>
        </div>
	)
}

const mapStateToProps = (state) => ({
	firstname: 			state.users.firstname,
	middlename: 		state.users.middlename,
	lastname: 			state.users.lastname,
	username: 			state.users.username,
	isLoading: 			state.users.isLoading,
	firstnameStatus: 	state.users.firstnameStatus
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
	getFirstname,
	getMiddlename,
	getLastname,
	getUsername,
	createUser,
	addClassFirstname
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

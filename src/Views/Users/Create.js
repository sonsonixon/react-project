import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import {
	handleFirstname,
	handleMiddlename,
	handleLastname,
	handleUsername
} from '../../Actions/UserActions';

const CreateUser = (props) => {
	
	let firstname, middlename, lastname, username, myForm;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Submitted | Form fields cleared')
		myForm.reset();
	}

	const handleChangeFirstname = (e) => {
		e.preventDefault();
		firstname = e.target.value;
		props.handleFirstname(firstname);
	}

	const handleChangeMiddlename = (e) => {
		e.preventDefault();
		middlename = e.target.value;
		props.handleMiddlename(middlename);
	}

	const handleChangeLastname = (e) => {
		e.preventDefault();
		lastname = e.target.value;
		props.handleLastname(lastname);
	}

	const handleChangeUsername = (e) => {
		e.preventDefault();
		username = e.target.value;
		props.handleUsername(username);
	}
	/*
	let todo, myForm;

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addTodo(todo);
		myForm.reset();
	}

	const handleChange = (e) => {
		todo = e.target.value;
	}
	*/

	return (
		<div>
        	<div className="card">
              	<div className="card-header">
                	<h4 className="card-title">USER CREATION</h4>
                	<p>Lets create some users</p>
              	</div>
              	<div className="card-body">
              		<form ref={(node) => myForm = node} onSubmit={handleSubmit}>
		                <div className="row">
		                	<div className="col-md-3">
		                      	<div className="form-group">
			                        <label>First Name:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={handleChangeFirstname}
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
			                        />
		                      	</div>
		                    </div>
		                </div>
		                <div className="row">
		                	<div className="col-md-12">
		                		<div className="form-group text-center">
		                			<input 
		                				type="submit"
		                				className="btn btn-round btn-wd btn-fill btn-danger"
		                				value="Create"
		                			/>
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
	firstname: state.users.firstname,
	middlename: state.users.middlename,
	lastname: state.users.lastname,
	username: state.users.username
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
	handleFirstname,
	handleMiddlename,
	handleLastname,
	handleUsername
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

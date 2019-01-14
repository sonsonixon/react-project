import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import {
	addTodo
} from '../../Actions/UserActions';

const CreateUser = (props) => {
	let todo, input;

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addTodo(todo);
		input.value = '';
	}

	const handleChange = (e) => {
		todo = e.target.value;
	}

	return (
		<div>
			<h3>FORMS</h3>
			<p>Handling form submission using controlled components</p>
        	<div className="card">
              	<div className="card-header">
                	<h4 className="card-title">CREATE</h4>
                	<p>Create To Do</p>
              	</div>
              	<div className="card-body">
              		<form onSubmit={handleSubmit}>
		                <div className="row">
		                	<div className="col-md-12">
		                      	<div className="form-group">
			                        <label>To Do:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={handleChange}
			                        	ref={node => { input = node }}
			                        />
		                      	</div>
		                    </div>
		                </div>
		                <div className="row">
		                	<div className="col-md-12">
		                		<div className="form-group">
		                			<input 
		                				type="submit"
		                				className="btn btn-round btn-block btn-fill btn-danger"
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
            		<h4>
            			TODOS:
            		</h4>
            		{props.todos.map((data) =>
            			<li key={data.key}>{data.todo}</li>
            		)}
            	</div>
            </div>
        </div>
	)
}

const mapStateToProps = (state) => ({
	todos: state.users.create.todos
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
	addTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

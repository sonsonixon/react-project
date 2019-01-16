import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import {
	addTodo
} from '../Actions/TodoActions';

const Todo = (props) => {
	let todo, myForm;

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addTodo(todo);
		myForm.reset();
	}

	const handleChange = (e) => {
		todo = e.target.value;
	}

	return (
		<div>
        	<div className="card">
              	<div className="card-header">
                	<h4 className="card-title">CREATE TODOS</h4>
                	<p>What do you want to do?</p>
              	</div>
              	<div className="card-body">
              		<form ref={(node) => myForm = node} onSubmit={handleSubmit}>
		                <div className="row">
		                	<div className="col-md-12">
		                      	<div className="form-group">
			                        <label>What to do today?</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={handleChange}
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
	todos: state.todo.todos
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
	addTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

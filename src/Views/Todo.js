import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

// Functions from Middleware
import {
	addTodo,
	changeUserId,
	changeTitle,
	fetchTodo
} from '../Middleware/TodoMiddleware';

// Components
import Card from '../Components/Common/Card';
import SubmitButton from '../Components/Common/SubmitButton';
import ServerSideTable from '../Components/Common/ServerSideTable';

import classnames from 'classnames';

class Todo extends Component {
	constructor(props){
		super(props);

		this.handleUseridChange = this.handleUseridChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.columns = [
            {
    	  		Header: 'ID',
    			accessor: 'id',
    			width: 150,
        		Cell: props => <div className='text-center'>
        							<span className='badge badge-pill badge-primary'>{props.value}</span>
        						</div>
    		},
            {
    			Header: 'Title',
    		    accessor: 'title'
    	  	},
            {
                Header: 'Completed',
                accessor: 'completed',
                Cell: props => {
                	switch(props.value){
                		case false:
                			return (
                				<div className='text-center'>
                					<span className='badge badge-pill badge-danger'>Not Completed</span>
                				</div>
                			)
                		case true:
                			return (
                				<div className='text-center'>
                					<span className='badge badge-pill badge-success'>Completed</span>
                				</div>
                			)
                		default:
                	}
                }
            },
        ]
	}

	componentDidMount(){
		this.props.fetchTodo();
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.props.userid, this.props.title);
	}

	handleUseridChange(e) {
		e.preventDefault();
		this.props.changeUserId(e.target.value);
	}

	handleTitleChange(e) {
		e.preventDefault();
		this.props.changeTitle(e.target.value);
	}

	render() {

		const {
			isFetching,
			isPosting,
			invalidUserID,
			invalidTitle,
			validUserID,
			validTitle,
			userid,
			title,
			todos
		} = this.props;

		return (
			<div>
	        	<Card cardTitle="ADD TODO" cardDescription="What to do today?">
	        		<form onSubmit={this.handleSubmit}>
		                <div className="row">
		                	<div className="col-md-6">
		                      	<div className={classnames({
									  	'form-group': true,
									  	'has-danger': !validUserID && invalidUserID,
									  	'has-success': validUserID && !invalidUserID
									})}
		                      	>
			                        <label>Fake User ID:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={this.handleUseridChange}
			                        	value={userid}
			                        />
		                      	</div>
		                    </div>
		                    <div className="col-md-6">
		                      	<div className={classnames({
										'form-group': true,
									  	'has-danger': !validTitle && invalidTitle,
									  	'has-success': validTitle && !invalidTitle
									})}
		                      	>
			                        <label>Title:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={this.handleTitleChange}
			                        	value={title}
			                        />
		                      	</div>
		                    </div>
		                </div>
		                <div className="row">
		                	<div className="col-md-12">
		                		<div className="form-group">
		                			<SubmitButton isLoading={isPosting} />
	                			</div>
		                	</div>
		                </div>
	                </form>
	        	</Card>
	            <Card cardTitle="TODO LIST" cardDescription="Work! Work! Work!">
	            	 <ServerSideTable
	                	data={todos}
	                	columns={this.columns}
	                	loading={isFetching}
	                />            		
	            </Card>
	        </div>
		)
	}
}

const mapStateToProps = (state) => ({
	// UI States
	isFetching: 		state.ui.isFetching,
	isPosting: 			state.ui.isPosting,
	invalidUserID: 		state.ui.invalidUserID,
	validUserID: 		state.ui.validUserID,
	validTitle: 		state.ui.validTitle,
	invalidTitle: 		state.ui.invalidTitle,

	// Todo States
	userid: 			state.todo.userid,
	title: 				state.todo.title,
	todos: 				state.todo.todos,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
	addTodo,
	changeUserId,
	changeTitle,
	fetchTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

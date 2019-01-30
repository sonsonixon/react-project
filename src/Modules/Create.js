import React, { Component } from 'react';

class CreateUser extends Component {
	constructor(){
      	super();

      	this.state = {
      		persons: []
      	}

      	this.handleClick = this.handleClick.bind(this);
      	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
	    console.log('Clicked')
  	}

  	handleSubmit(event) {
  		event.preventDefault();
  		console.log('Form Submitted')
  	}

    render() {
        return (
        	<div>
	        	<div className="card">
	              	<div className="card-header">
	                	<h4 className="card-title">CREATE</h4>
	                	<p className="card-category">Create Sample Person</p>
	              	</div>
	              	<div className="card-body">
	              		<form onSubmit={this.handleSubmit}>
			                <div className="row">
			                	<div className="col-md-3">
			                      	<div className="form-group">
				                        <label>First Name</label>
				                        <input 
				                        	type="text" 
				                        	className="form-control"
				                        />
			                      	</div>
			                    </div>
			                    <div className="col-md-3">
			                      	<div className="form-group">
				                        <label>Middle Name</label>
				                        <input 
				                        	type="text" 
				                        	className="form-control"
				                        />
			                      	</div>
			                    </div>
			                    <div className="col-md-3">
			                      	<div className="form-group">
				                        <label>Last Name</label>
				                        <input 
				                        	type="text"
				                        	className="form-control"
				                        />
			                      	</div>
			                    </div>
			                    <div className="col-md-3">
			                      	<div className="form-group">
				                        <label>Username</label>
				                        <input 
				                        	type="text"
				                        	className="form-control"
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
	        </div>
        );
    }
}

export default CreateUser;

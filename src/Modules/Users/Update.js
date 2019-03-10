import React, { Component } from 'react';

// redux
import { connect } 			  from "react-redux";
import { bindActionCreators } from 'redux'

// components
import Card from '../../Components/Card';

// forms
import UpdateUserForm from '../../Components/Forms/Users/UpdateUserForm';

// middlewares
import {
	updateUser
} from '../../Redux/Middlewares/UsersMiddleware';

class EditUser extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}	

	handleSubmit(values) {
		const uuid = this.props.match.params.uuid;
		const { updateUser } = this.props;

		updateUser(uuid, values);
	}

    render() {
        return (
        	<div>
        		<Card cardTitle="Update User">
        			<UpdateUserForm
        				uuid={this.props.match.params.uuid}
        				onSubmit={this.handleSubmit}
        			/>
    			</Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	updateUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);

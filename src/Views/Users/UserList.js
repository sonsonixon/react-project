import React from "react";
import { connect } from "react-redux";

import ServerSideTable from '../../Components/Common/ServerSideTable';

// Redux Action
import { fetchUsers } from "../../Actions/UserActions";

class UserList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        const { users, isLoading, hasError } = this.props;

        console.log(users);
        
	  	const columns = [
            {
    	  		Header: 'ID',
    			accessor: 'user_id',
    			width: 150,
        		Cell: props => <div className='text-center'>
        							<span className='badge badge-pill badge-primary'>{props.value}</span>
        						</div>
    		},
            {
    			Header: 'First Name',
    		    accessor: 'first_name'
    	  	},
            {
                Header: 'Last Name',
                accessor: 'last_name'
            },
            {
                Header: 'Username',
                accessor: 'username'
            }
        ]

        if (hasError) {
            return <div>Error! {hasError.message}</div>;
        }

        return (
            <div className="card">
	            <div className="card-header">
                	<h4 className="card-title">REACT TABLE</h4>
                	<p className="card-category">Fetching records from API</p>
              	</div>
            	<div className="card-body">
            		<div className="row">
            			<div className="col-md-12">
			                <ServerSideTable
			                	data={users}
			                	columns={columns}
			                	loading={isLoading}
			                />
            			</div>
            		</div>
            	</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users:      state.users.users,
    loading:    state.users.isLoading,
    error:      state.users.hasError
});

export default connect(mapStateToProps)(UserList);
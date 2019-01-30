import React from "react";
import { connect } from "react-redux";

import ServerSideTable from '../../Components/ServerSideTable';

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [
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
    }
    
    render() {
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
			                	api={'fetchUsers'}
			                	columns={this.columns}
			                />
            			</div>
            		</div>
            	</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(UserList);
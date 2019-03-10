import React from "react";
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

import ServerSideTable from '../../Components/ServerSideTable';

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [
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
            },
            {
                Header: 'Role',
                accessor: 'role',
                Cell: props => {
                    switch(props.value){
                        case 'user':
                            return (
                                <div className='text-center'>
                                    <span className='badge badge-pill badge-warning'>{props.value}</span>
                                </div>
                            )
                        case 'admin':
                            return (
                                <div className='text-center'>
                                    <span className='badge badge-pill badge-success'>{props.value}</span>
                                </div>
                            )
                        default:
                            return (
                                <div className='text-center'>
                                    <span className="badge badge-danger">For Update</span>
                                </div>
                            )
                    }
                }
            },
            {
                Header: 'Actions',
                accessor: 'uuid',
                width: 100,
                Cell: props => {
                    return (
                        <div className='text-center'>
                            <Link to={'users/update/' + props.value} className="pr-1">
                                <span className="badge badge-pill badge-primary">
                                    <i className='fa fa-fw fa-pencil'></i>
                                </span>
                            </Link>
                            <Link to={'users/update/password/' + props.value} className="pl-1">
                                <span className="badge badge-pill badge-default">
                                    <i className='fa fa-fw fa-refresh'></i>
                                </span>
                            </Link>
                        </div>
                    );
                }
            },
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

const mapStateToProps = (state) => {
    return {
        
    }
};

export default connect(mapStateToProps)(UserList);
import React from "react";
import { connect } from "react-redux";

// React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// Redux Action
import { fetchUsers } from "../../Actions/UserActions";

class UserList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        const { users, loading, error } = this.props;

        console.log('Changes');

	  	const columns = [{
		    Header: 'Name',
		    accessor: 'name'
	  	}]

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ReactTable
                	data={users}
                	columns={columns}
                	defaultPageSize={10}
                	SubComponent={row => {
					    return (
					      	<div>
						        You can put any component you want here, even another React Table! You
						        even have access to the row-level data if you need! Spark-charts,
						        drill-throughs, infographics... the possibilities are endless!
					      	</div>
					    );
				  	}}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users:      state.UserReducer.users,
    loading:    state.UserReducer.loading,
    error:      state.UserReducer.error
});

export default connect(mapStateToProps)(UserList);
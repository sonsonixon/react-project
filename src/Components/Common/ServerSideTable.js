import React, { Component } from 'react';
// React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// React Table Defaults
import { ReactTableDefaults } from "react-table";

// Assign Default Values for React Table Props
Object.assign(ReactTableDefaults, {
	defaultPageSize: 10,
	loading: false,
	pageSizeOptions: [5, 10, 20, 25, 50, 100],
	filterable: true
});

class ServerSideTable extends Component {
    render() {
        return (
            <div>
            	<ReactTable
                	data={this.props.data}
                	columns={this.props.columns}
                	loading={this.props.loading}
                	className="-highlight"
                />
            </div>
        );
    }
}

export default ServerSideTable;

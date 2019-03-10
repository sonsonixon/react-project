import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import {
    handleTableCreation,
    handleTableDestroy,
} from '../Redux/Middlewares/UiMiddleware';

class ServerSideTable extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(state, instance) {
        const { handleTableCreation, api } = this.props;
        const { pageSize, page } = state;
        
        handleTableCreation(api, pageSize, page);
    }

    componentWillUnmount() {
        const { handleTableDestroy } = this.props;
        handleTableDestroy();
    }

    render() {  

        const { data, pages, loading } = this.props;

        return (
            <div>
            	<ReactTable
                    manual // handle settings on server
                	data={data} //  table data
                	columns={this.props.columns} // columns
                	loading={loading} // loading
                    pages={pages} // total pages
                    defaultPageSize={10} // default page number size
                	className="-highlight" // class
                    onFetchData={this.fetchData} // refresh table on state change
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // call ui states as props
    const ui = state.ui;
    return {
        data:       ui.serversideTable.data, // table data
        pages:      ui.serversideTable.pages, // total pages
        url:        ui.serversideTable.url, // api url
        page:       ui.serversideTable.page, // current page number
        pageSize:   ui.serversideTable.pageSize, // page size
        loading:    ui.isFetching // fetch loader
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    handleTableCreation,
    handleTableDestroy,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ServerSideTable);

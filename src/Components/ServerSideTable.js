import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import {
    saveTable
} from '../Actions/UiActions';

import {
    createTable,
    destroyTable
} from '../Middleware/UiMiddleware';

class ServerSideTable extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(state, instance) {
        this.props.saveTable(this.props.api, state.pageSize, state.page)
        .then(() => {
            this.props.createTable(this.props.url, this.props.pageSize, this.props.page);
        })
    }

    componentWillUnmount() {
        this.props.destroyTable();
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
        data:       ui.data, // table data
        pages:      ui.pages, // total pages
        url:        ui.url, // api url
        page:       ui.page, // current page number
        pageSize:   ui.pageSize, // page size
        loading:    ui.isFetching // fetch loader
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    saveTable, // save api url, page number and page size to redux state
    createTable, // create table on page render
    destroyTable // destroy table on component unmount
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ServerSideTable);

import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import {
    buildTable,
    destroyTable
} from '../Middleware/UiMiddleware';

class ServerSideTable extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(state, instance) {
        this.props.buildTable(this.props.api, state.pageSize, state.page);
    }

    componentWillUnmount() {
        this.props.destroyTable();
    }

    render() {

        const { data, pages, loading } = this.props;

        return (
            <div>
            	<ReactTable
                    manual
                	data={data}
                	columns={this.props.columns}
                	loading={loading}
                    pages={pages}
                    defaultPageSize={10}
                	className="-highlight"
                    onFetchData={this.fetchData}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.ui.data,
    pages: state.ui.pages,
    loading: state.ui.isFetching
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    buildTable,
    destroyTable
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ServerSideTable);

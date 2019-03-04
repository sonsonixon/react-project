import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    logout
} from '../redux/middleware/user';


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        const { logout } = this.props;
        logout();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-absolute fixed-top bg-danger">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <div className="navbar-toggle">
                            <button type="button" className="navbar-toggler">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <p>
                        </p>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <form>
                            <div className="input-group no-border">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <i className="nc-icon nc-zoom-split"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link btn-magnify" href="#pablo">
                                    <i className="nc-icon nc-layout-11"></i>
                                    <p>
                                        <span className="d-lg-none d-md-block">Stats</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item btn-rotate dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="nc-icon nc-settings-gear-65"></i>
                                    <p>
                                        <span className="d-lg-none d-md-block">Some Actions</span>
                                    </p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a href="#\" className="dropdown-item" onClick={this.handleLogout}>Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    logout
}, dispatch);

export default connect(null, mapDispatchToProps)(Navbar);

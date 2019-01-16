import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import {
  increment,
  decrement
} from '../Actions/CounterActions'

const Counter = (props) => {
    return (
        <div>
        	<div className="card">
                <div className="card-header">
                    <h4 className="card-title">COUNTER COMPONENT</h4>
                    <p>Simple counter using REDUX and redux middleware THUNK</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-success text-center">
                                <h3>{props.count}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <button 
                                    className="btn btn-round btn-block btn-outline-info"
                                    onClick={props.increment}
                                >PLUS 1</button>
                            </div>
                            <div className="col-md-6">
                                <button 
                                    className="btn btn-round btn-block btn-outline-info"
                                    onClick={props.decrement}
                                >MINUS 1</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
    );
}

const mapStateToProps = (state) => ({
    count: state.counter.count,
});

const mapDispatchToProps = (dispatch) =>
  	bindActionCreators(
	    {
	      	increment,
	      	decrement
	    },
    	dispatch
  	)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

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
        	<h4>Counter</h4>
        	<p>Count: {props.count}</p>
        	<button 
        		className="btn btn-round btn-outline-info"
        		onClick={props.increment}
        	>+</button>
        	<button 
        		className="btn btn-round btn-outline-info"
        		onClick={props.decrement}
        	>-</button>
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

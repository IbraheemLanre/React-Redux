import { React, Component } from "react";
import { connect } from "react-redux";
import * as actionType from '../action/Action'

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="counter_text">Your score: {this.props.ctr}</div>
        <button onClick={this.props.incCounter}>Increase one</button>
        <button onClick={this.props.decCounter}>Decrease one</button>
        <button onClick={this.props.resetCounter}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incCounter: () => dispatch({ type: actionType.INCREMENT}),
    decCounter: () => dispatch({ type: actionType.DECREMENT}),
    resetCounter:()=> dispatch({type: actionType.RESET})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

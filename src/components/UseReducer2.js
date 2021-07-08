import React from 'react';
import {connect} from "react-redux";

function UseReducer2(props) {
    function plusOrMinus(e) {
        if (e === 'plus' && props.count < 10) {
            props.setCount(props.count + 1)
        }
        if (e === 'minus' && props.count > 0) {
            props.setCount(props.count - 1)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4 offset-4">
                        <div className="card">
                            <div className="card-header bg-dark text-white text-center">
                                <h4>Counter</h4>
                            </div>
                            <div className="card-body my-2">
                                <h4>Count: {props.count}</h4>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button onClick={() => plusOrMinus("minus")}
                                                className="btn btn-danger btn-block">
                                            <h4>-</h4></button>
                                    </div>
                                    <div className="col-md-6">
                                        <button onClick={() => plusOrMinus('plus')}
                                                className="btn btn-success btn-block">
                                            <h4>+</h4></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const a = connect(getState, getDispatch);

function getState(state) {
    return {
        count: state.userReducer.count
    }
}

function getDispatch(dispatch) {
    return {
        setCount: (count) => {
            dispatch({type: 'SET_COUNT', payload: count})
        }
    }
}

export default a(UseReducer2);
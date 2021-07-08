import React from 'react';
import {connect} from "react-redux";

function UseReducer(props) {
    function addSalary(index) {
        props.users[index].salary = props.users[index].salary + 1000;
        props.setSalary(index)
    }

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    {props.users.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <div className="card-header text-center bg-success text-white">
                                    <h4>{item.firstName} {item.lastName}</h4>
                                </div>
                                <div className="card-body">
                                    <h4>Age:{item.age}</h4>
                                    <h4>Salary:{item.salary}</h4>
                                </div>
                                <div className="card-footer">
                                    <button onClick={() => addSalary(index)} className="btn btn-success">Add salary
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const a = connect(getState, getDispatch);

function getState(state) {
    return {
        users: state.userReducer.users
    }
}

function getDispatch(dispatch) {
    return {
        setSalary: (index) => {
            dispatch({type: 'SET_SALARY', index:index})
        }
    }
}

export default a(UseReducer);
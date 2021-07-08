import React from 'react';
import {connect} from "react-redux";

function TaskList(props) {
    function deleteTask(index) {
        props.deletingIndex(index)
    }

    return (
        <div>
            {props.tasks.map((item, index) => (
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6>{item.title}</h6>
                    <button onClick={() => deleteTask(index)} className=" btn btn-danger btn-sm">Delete</button>
                </div>
            ))}
        </div>
    );
}

const a = connect(getState, getDispatch);

function getState(state) {
    return {
        tasks: state.taskReducer.tasks
    }
}

function getDispatch(dispatch) {
    return {
        deletingIndex: (index) => {
            dispatch({type:'DELETE_TASK', payload:index})
        }
    }
}

export default a(TaskList);
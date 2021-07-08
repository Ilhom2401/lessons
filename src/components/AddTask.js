import React from 'react';
import TaskList from "./TaskList";
import {useState} from 'react'
import {connect} from "react-redux";

function AddTask(props) {
    const [inputValue, setInputValue] = useState('');

    function addTask() {
        if (inputValue.trim()) {
            props.adding(inputValue);
            setInputValue('')
        }
        console.log(inputValue.trim())
    }

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4 offset-4">
                        <div className="card">
                            <div className="card-header w-100 d-flex justify-content-between align-items-center">
                                <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}
                                       className="w-100"
                                       type="text"/>
                                <button onClick={addTask} className="btn btn-dark btn-sm">Add</button>
                            </div>
                            <div className="card-body">
                                <TaskList/>
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
        task: state.taskReducer.tasks
    }
}

function getDispatch(dispatch) {
    return {
        adding: (value) => {
            dispatch({type: 'ADD_TASK', payload: value})
        }
    }
}

export default a(AddTask);
import React from 'react';
import {useState} from 'react'

function Counter(props) {
    const [isStart, setIsStart] = useState(false);
    const [counter, setCounter] = useState(0);
    const [intervall, setIntervall] = useState('');


    function startButton() {
        setIsStart(!isStart);
        let a = setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000);
        setIntervall(a)
    }

    function stopButton() {
        setIsStart(!isStart);
        clearInterval(intervall)
    }

    function resetCount () {
        setIsStart(!isStart);
        setCounter(0);
        clearInterval(intervall)
    }

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4 offset-4">
                        <div className="card">
                            <div className="card-body">
                                <h3>Time: {counter}</h3>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-6">
                                        {isStart ? <button onClick={stopButton}
                                                           className="btn btn-danger btn-block">Stop</button>
                                            : <button onClick={startButton}
                                                      className="btn btn-success btn-block">Start</button>}
                                    </div>
                                    <div className="col-md-6">
                                        <button onClick={resetCount} className="btn btn-warning btn-block">Reset
                                        </button>
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

export default Counter;
import React from 'react';
import {useEffect, useState} from 'react'

function Lesson21MyModal(props) {
    const [time, setTime] = useState(0);
    useEffect(() => {
       let a= setInterval(()=>{
            setTime(time=>time+1);
        }, 1000);

        return () => {
            console.log()
        }
    });
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur eius officiis
                    placeat. Dolorem ex, expedita modi omnis perspiciatis repudiandae.
                    {time}
                </div>
                <div className="card-body">
                    <button onClick={props.close} className="btn btn-primary">Close</button>
                </div>
            </div>

        </div>
    );
}

export default Lesson21MyModal;
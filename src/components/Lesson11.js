import React from 'react';
import {useState} from 'react'

function Lesson11(props) {

    // let yurdi=useState(0);
    // let myState=yurdi[0];
    // let mySetState=yurdi[1];
    const [yurdi, setYurdi] = useState(0);

    // let qadam=useState(1);
    // let myState1=qadam[0];
    // let mySetState1=qadam[1];
    const [qadam, setQadam] = useState(1);

    function yurish() {
        setYurdi(yurdi + qadam)
    }

    function qad() {
        setQadam(qadam + 1)
    }

    return (
        <div>
            <h4>Yurdi:{yurdi} m</h4>
            <button className="btn btn-secondary" onClick={yurish}>+</button>
            <h4>Qadam:{qadam} </h4>
            <button className="btn btn-secondary" onClick={qad}>+</button>
        </div>
    );
}

export default Lesson11;
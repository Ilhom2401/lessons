import React from 'react';
import {useState, useEffect} from 'react'
import axios from "axios";

function Lesson22(props) {
    const [staff, setStaff] = useState([]);
    const [selectUser, setSelectUser] = useState([]);
    useEffect(() => {
        axios.get('https://nimadir.herokuapp.com/api/employee')
            .then((res) => {
                setStaff(res.data.object);
                setSelectUser(res.data.object)
            })
    }, []);

    function getSelectedUser(event) {
        const filtered = staff.filter((item)=> item.id==event.target.value || event.target.value==='');
        setSelectUser(filtered)
    }

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4 offset-4">
                        <select onChange={getSelectedUser} className="form-control">
                            <option value="">All</option>
                            {staff.map((item) => (
                                <option value={item.id} key={item.id}>
                                    {item.firstName} {item.lastName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row my-5">
                    {selectUser.map((item) => (
                        <div className="col-md-4 my-3" key={item.id}>
                            <div className="card">
                                <div className="card-header bg-success text-center text-white">
                                    <h4> {item.firstName} {item.lastName}</h4>
                                </div>
                                <div className="card-body bg-dark text-white">
                                    <h6>Age: {item.age}</h6>
                                    <h6>Salary: {item.salary}</h6>
                                    <h6>Position: {item.position}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Lesson22;
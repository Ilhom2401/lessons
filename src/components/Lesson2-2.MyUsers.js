import React from 'react';
import {useState, useEffect} from 'react'
import axios from "axios";

function Lesson22MyUsers(props) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data);
                setSelectedUser(res.data)
            })
    }, []);

    function getSelectValue(event) {
        const selectUser = event.target.value;
        const filtered = users.filter(item => item.id == selectUser || selectUser === '');
        setSelectedUser(filtered)
    }

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4">
                        <select onChange={getSelectValue} className="form-control">
                            <option value="">All</option>
                            {users.map((item) => (
                                <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row my-5">
                    {selectedUser.map((item) => (
                        <div className="col-md-4 my-3" key={item.id}>
                            <div className="card">
                                <div className="card-header text-center">
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="card-body">
                                    <h6>{item.email}</h6>
                                    <h6>{item.address.city}</h6>
                                    <h6>{item.website}</h6>
                                    <h6>{item.company.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Lesson22MyUsers;
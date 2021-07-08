import React from 'react';
import {useState, useEffect} from 'react'
import axios from "axios";
import Lesson21MyModal from "./Lesson2-1.MyModal";

function Lesson21(props) {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState({
        firstName: 'Ilhom',
        lastName: 'Valiyev'
    });
    const [active, setActive] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isOpen, setModalVisible]=useState(false);
    // function addCount() {
    //     setCount(count+1)
    // }
    function changeName() {
        users.firstName = 'Ali';
        let a = {...users};
        setUsers(a)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setPosts(posts => res.data)
            })
    }, []);

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h4>{count}</h4>
                            <button type="button" onClick={() => setCount(count + 1)} className="btn btn-success mt-3">
                                add count
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center">
                            <h1>{users.firstName} {users.lastName}</h1>
                        </div>
                        <div className="card-body">
                            <button onClick={changeName} className="btn btn-primary">
                                Change name
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>{active ? "active" : 'disActive'}</h4>
                        </div>
                        <div className="card-body">
                            <button onClick={() => setActive(!active)} className="btn btn-info">Change active</button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={()=> setModalVisible(true)} className="btn btn-danger">Open Modal</button>
            <div className="row my-3">
                {isOpen ?
                    <Lesson21MyModal close={()=>setModalVisible(false)}/> : ''
                }

            </div>
            <div className="row">
                {
                    posts.map((item, index) => (
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    {item.body}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Lesson21;
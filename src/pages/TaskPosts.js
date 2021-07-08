import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class TaskPosts extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {
                            this.state.users.map((item) => (
                                <div className="col-md-4 my-3">
                                    <div className="card">
                                        <div className="card-header bg-success text-center text-white">
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div className="card-body">
                                            <img className="img-fluid" src="/images/user.png" alt=""/>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-outline-primary text-white btn-block">
                                                <Link to={"/users/" + item.id}>Read More</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskPosts;
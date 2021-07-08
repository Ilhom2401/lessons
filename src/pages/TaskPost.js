import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class TaskPost extends Component {
    state = {
        user: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    user: res.data
                })
            })
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                <div className="row my-5">
                    <div className="col-md-6 offset-3">
                        <div className="card">
                            <div className="card-header bg-success text-white text-center">
                                <h4>User information №{user.id}</h4>
                            </div>
                            <div className="card-body">
                                <p><strong>1. Name:</strong> {user.name}</p>
                                <p><strong>2. UserName:</strong>: {user.username}</p>
                                <p><strong>3. Email:</strong> {user.email}</p>
                                {/*<p>4. City: {user.address.city}</p>*/}
                                <p><strong>5. Website:</strong> {user.website}</p>
                                {/*<p>5. Company: {user.company.name}</p>*/}
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-danger text-white btn-block"
                                        onClick={() => this.props.history.push('/users')}>Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskPost;
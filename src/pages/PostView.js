import React, {Component} from 'react';
import axios from "axios";

class PostView extends Component {
    state = {
        post: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    post: res.data
                })
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h5>{this.state.post.title}</h5>
                            </div>
                            <div className="card-body">
                                {this.state.post.body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostView;
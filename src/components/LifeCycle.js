import React, {Component} from 'react';
import axios from "axios";

class LifeCycle extends Component {
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(' componentWillReceiveProps worked');
        console.log(nextProps);
        console.log(this.props)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.ism);
        console.log(prevProps.ism)
    }

    state = {
        users: [],
        images: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.setState({
                    users: res.data
                })
            });
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                this.setState({
                    images: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <h1>{this.props.ism}</h1>
                <div className="row">
                    {
                        this.state.users.map((item) => (
                            <div key={item.id} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header text-center text-success">
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className="card-body">
                                        <h4>Email: {item.email}</h4>
                                        <h4>address: {item.address.city}</h4>
                                        <h4>phone: {item.phone}</h4>
                                        <h4>Website: {item.website}</h4>
                                        <h4>company: {item.company.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="row">
                    {
                        this.state.images.map((item) => (
                            <div key={item.id} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header text-center text-success">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="card-body">
                                        <img className="img-fluid" src={item.url} alt=""/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default LifeCycle;
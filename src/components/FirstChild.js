import React, {Component} from 'react';
import Balance from "./Balance";

class FirstChild extends Component {


    render() {
        const {users, myFunc} = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header bg-dark text-white text-center">
                                    <h2>Worker</h2>
                                </div>
                                <div className="card-body">
                                    <h4>Name: {users.name} </h4>
                                    <h4>Age: {users.age} </h4>
                                    <h4>Company: {users.company} </h4>
                                    <h4>{users.salary}</h4>
                                  <Balance buttonFunc={myFunc}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default FirstChild;
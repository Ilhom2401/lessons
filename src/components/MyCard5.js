import React, {Component} from 'react';

class MyCard5 extends Component {
    render() {
        const {qiymat} = this.props;
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Students</div>
                    <div className="card-body">
                        <h4>Name: {qiymat.name}</h4>
                        <h4>Age: {qiymat.age}</h4>
                        <h4>Group: {qiymat.group}</h4>
                    </div>
                </div>

            </div>
        );
    }
}

export default MyCard5;
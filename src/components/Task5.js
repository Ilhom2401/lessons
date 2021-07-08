import React, {Component} from 'react';

class Task5 extends Component {

    state = {
        myArray: [],
        name: '',
        lastName: '',
        age: '',
        password: '',
        index: null
    };

    getInputValue = (event) => {

        let nam = event.target.name;
        let value = event.target.value;

        this.setState({
            [nam]: value
        });
    };

    addList = () => {

        if (this.state.index === null) {

            let tempList = {
                name: this.state.name,
                lastName: this.state.lastName,
                age: this.state.age,
                password: this.state.password
            };

            this.state.myArray.push(tempList);

            this.setState({
                myArray: this.state.myArray
            });

            this.state.name = '';
            this.state.lastName = '';
            this.state.age = '';
            this.state.password = ''
        } else {

            this.state.myArray[this.state.index].name = this.state.name;
            this.state.myArray[this.state.index].lastName = this.state.lastName;
            this.state.myArray[this.state.index].age = this.state.age;
            this.state.myArray[this.state.index].password = this.state.password;


            this.setState({
                myArray: this.state.myArray,
                index: null
            })

        }
        this.state.name = '';
        this.state.lastName = '';
        this.state.age = '';
        this.state.password = ''
    };

    editList = (item, index) => {
        this.state.name = item.item.name;
        this.state.lastName = item.item.lastName;
        this.state.age = item.item.age;
        this.state.password = item.item.password;
        this.state.index = item.index;

        this.setState({
            name: this.state.name,
            lastName: this.state.lastName,
            age: this.state.age,
            password: this.state.password,
            index: this.state.index
        });
    };

    deleteList = (item, index) => {
        this.state.myArray.splice(item.index, 1);
        this.setState({
            myArray: this.state.myArray,
            index: null
        })
    };

    render() {
        return (
            <div className="p-2">
                <div className="row">
                    <div className="col-md-3 my-5">
                        <div className="card">
                            <div className="card-header text-white bg-dark text-center">
                                <h3>Add student</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <label>Name :</label>
                                    <input value={this.state.name} onChange={this.getInputValue} type="text"
                                           name="name"
                                           className="form-control mb-2"/>
                                    <label>Last Name :</label>
                                    <input value={this.state.lastName} onChange={this.getInputValue} type="text"
                                           name="lastName"
                                           className="form-control mb-2"/>
                                    <label>Age :</label>
                                    <input value={this.state.age} onChange={this.getInputValue} type="number"
                                           name="age"
                                           className="form-control mb-2"/>
                                    <label>Password :</label>
                                    <input value={this.state.password} onChange={this.getInputValue} type="password"
                                           name="password"
                                           className="form-control mb-2"/>
                                    <button onClick={this.addList} type="button"
                                            className="btn btn-success form-control mt-2">Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 my-5">
                        <table className="table table-bordered table-dark table-striped">
                            <thead>
                            <tr>
                                <th>T/r</th>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Password</th>
                                <th>Controls</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.myArray.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}.</td>
                                    <td>{item.name}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.password}</td>
                                    <td className="d-flex justify-content-around">
                                        <button onClick={() => this.editList({item, index})}
                                                className="btn btn-success">Edit
                                        </button>
                                        <button onClick={() => this.deleteList({item, index})}
                                                className="btn btn-danger">Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task5;
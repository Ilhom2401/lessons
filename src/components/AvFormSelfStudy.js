import React, {Component} from 'react';
import {AvField, AvForm} from 'availity-reactstrap-validation'
import {Modal, ModalBody, ModalHeader} from 'reactstrap';

class AvFormSelfStudy extends Component {

    state = {
        students: [],
        isOpen: false,
        selectedIndex: -1
    };

    addStudent = (event, value) => {
        this.state.students.push(value);
        this.setState({
            students: this.state.students
        });
        this.form.reset()
    };

    deleteStudent = (index) => {
        this.state.students.splice(index, 1);
        this.setState({
            students: this.state.students
        })
    };

    changeModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    editStudent = (event, value) => {
        this.state.students[this.state.selectedIndex] = value;
        this.setState({
            students: this.state.students
        });
        this.changeModal()
    };

    render() {
        const {students, isOpen, selectedIndex} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-success text-white text-center">
                                    <h3>Add Student</h3>
                                </div>
                                <div className="card-body">
                                    <AvForm ref={(c) => this.form = c} onValidSubmit={this.addStudent}>
                                        <AvField
                                            type="text"
                                            name="name"
                                            placeholder="Ism"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            name="lastName"
                                            placeholder="Familya"
                                            required
                                        />
                                        <AvField
                                            type="number"
                                            name="age"
                                            placeholder="Yosh"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            name="group"
                                            placeholder="Gruppa"
                                            required
                                        />
                                        <button type="submit" className="btn btn-success btn-block">Adding</button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <table className="table table-bordered table-dark table-striped">
                                <thead>
                                <tr>
                                    <th>TR</th>
                                    <th>Name</th>
                                    <th>LastName</th>
                                    <th>Age</th>
                                    <th>Group</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    students.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.age}</td>
                                            <td>{item.group}</td>
                                            <td>
                                                <button onClick={() => {
                                                    this.changeModal();
                                                    this.setState({selectedIndex: index})
                                                }} className="btn btn-warning">Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => this.deleteStudent(index)}
                                                        className="btn btn-danger">Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Modal isOpen={isOpen} toggle={this.changeModal}>
                                <ModalHeader toggle={this.changeModal}>Edit Student</ModalHeader>
                                <ModalBody>
                                    <AvForm model={this.state.students[selectedIndex]} onValidSubmit={this.editStudent}>
                                        <AvField
                                            type="text"
                                            name="name"
                                            placeholder="Ism"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            name="lastName"
                                            placeholder="Familya"
                                            required
                                        />
                                        <AvField
                                            type="number"
                                            name="age"
                                            placeholder="Yosh"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            name="group"
                                            placeholder="Gruppa"
                                            required
                                        />
                                        <button type="submit" className="btn btn-success btn-block">Adding</button>
                                    </AvForm>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AvFormSelfStudy;
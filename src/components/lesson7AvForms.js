import React, {Component} from 'react';
import {AvField, AvForm} from 'availity-reactstrap-validation'
import {Modal, ModalBody, ModalHeader} from 'reactstrap';

class Lesson7AvForms extends Component {

    state = {
        students: [],
        isOpen: false,
        selectedIndex: -1
    };

    addStudent = (event, value) =>  {
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

    editStudent=(event, value)=>{
        this.state.students[this.state.selectedIndex]=value;
        this.setState({
            students:this.state.students,
            selectedIndex:-1,
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
                                <div className="card-header">
                                    <h4 className="text-center">Add student</h4>
                                </div>
                                <div className="card-body">
                                    <AvForm ref={(c) => this.form = c} onValidSubmit={this.addStudent}>
                                        <AvField
                                            type="text"
                                            label="Ismingizni kiriting"
                                            name="name"
                                            required
                                        />
                                        <AvField
                                            type="number"
                                            label="Yoshingizni kiriting"
                                            name="age"
                                            required
                                        />
                                        <AvField
                                            type="number"
                                            label="Guruhingizni kiriting"
                                            name="group"
                                            required
                                        />
                                        <button type="submit" className="btn btn-info btn-block mt-4">Add student
                                        </button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <table className="table table-dark table-bordered">
                                <thead>
                                <tr>
                                    <th>TR</th>
                                    <th>Name</th>
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
                                            <td>{item.age}</td>
                                            <td>{item.group}</td>
                                            <td>
                                                <button onClick={() => {
                                                    this.setState({selectedIndex: index});
                                                    this.changeModal()
                                                }} type="button"
                                                        className="btn btn-warning">Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" onClick={() => this.deleteStudent(index)}
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
                        <div className="col-md-4">
                            <Modal isOpen={isOpen} toggle={this.changeModal}>
                                <ModalHeader toggle={this.changeModal}>Modal title</ModalHeader>
                                <ModalBody>

                                    <AvForm onValidSubmit={this.editStudent} model={students[selectedIndex]}>
                                        <AvField
                                            type="text"
                                            label="Ismingizni kiriting"
                                            name="name"
                                            required
                                        />
                                        <AvField
                                            type="number"
                                            label="Yoshingizni kiriting"
                                            name="age"
                                            required
                                        />
                                        <AvField
                                            type="number"
                                            label="Guruhingizni kiriting"
                                            name="group"
                                            required
                                        />
                                        <button type="submit" className="btn btn-warning btn-block mt-4">Edit student
                                        </button>
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

export default Lesson7AvForms;
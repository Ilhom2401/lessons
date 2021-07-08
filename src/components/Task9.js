import React, {Component} from 'react';
import axios from "axios";
import {AvField, AvForm} from 'availity-reactstrap-validation'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Task9 extends Component {
    state = {
        users: [],
        isOpenModal: false,
        isOpenModal2: false,
        deletingId: null,
        deletingItem: null,
        editingId: {}
    };

    componentDidMount() {
        axios.get('https://nimadir.herokuapp.com/api/employee')
            .then((res) => {
                this.setState({
                    users: res.data.object
                });

            })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     axios.get('https://nimadir.herokuapp.com/api/employee')
    //         .then((res) => {
    //             this.setState({
    //                 users: res.data.object
    //             })
    //         })
    // }

    addForm = (event, value) => {
        axios.post('https://nimadir.herokuapp.com/api/employee', value)
            .then((res)=>{
                if (res.data.success){
                    axios.get('https://nimadir.herokuapp.com/api/employee')
                        .then((res)=>{
                            this.setState({
                                users:res.data.object
                            })
                        })
                }
            });
        this.form.reset()
    };

    editForm = (event, value) => {
        axios.put('https://nimadir.herokuapp.com/api/employee/' + this.state.editingId, value);
        this.changeModal2()

    };

    deleteForm = (id) => {
        axios.delete('https://nimadir.herokuapp.com/api/employee/' + id)
            .then((res)=> {
                if (res.data.success) {
                    axios.get('https://nimadir.herokuapp.com/api/employee')
                        .then((res)=>{
                            this.setState({
                                users:res.data.object
                            })
                        })

                }
            });
        this.changeModal()
    };

    changeModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    };

    changeModal2 = (id) => {
        this.setState({
            isOpenModal2: !this.state.isOpenModal2,
            editingId: id
        });
        this.state.users.map((item) => {
            if (item.id === id) {
                this.setState({
                    editingItem: item
                })
            }
        });
        console.log(this.state.editingId)
    };

    deletingModal = (id) => {
        this.setState({
            deletingId: id
        });
        this.changeModal()
    };

    render() {
        const {users} = this.state;
        return (
            <div>
                <div className="container">
                    <section>
                        <div className="row my-5">
                            <div className="col-md-4 offset-4">
                                <div className="card">
                                    <div className="card-header bg-dark text-center text-white">
                                        <h3>Form</h3>
                                    </div>
                                    <div className="card-body">
                                        <AvForm ref={(c) => this.form = c} onValidSubmit={this.addForm}>
                                            <AvField
                                                type="text"
                                                name="firstName"
                                                placeholder="FirstName"
                                                required
                                            />
                                            <AvField
                                                type="text"
                                                name="lastName"
                                                placeholder="LastName"
                                                required
                                            />
                                            <AvField
                                                type="number"
                                                name="age"
                                                placeholder="Age"
                                                required
                                            />
                                            <AvField
                                                type="text"
                                                name="salary"
                                                placeholder="Salary"
                                                required
                                            />
                                            <AvField type="select" name="position">
                                                <option value="Security">Security</option>
                                                <option value="Programmer">Programmer</option>
                                            </AvField>
                                            <button type="submit" className="btn btn-dark form-control">Add employee
                                            </button>

                                        </AvForm>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr/>
                    <div className="row my-5">
                        {
                            users.map((item, index) => (
                                <div className="col-md-4 mb-4">
                                    <div className="card">
                                        <div className="card-header text-center text-success">
                                            <h4>Last Name: {item.lastName}</h4>
                                        </div>
                                        <div className="card-body">
                                            <h5>Name: {item.firstName}</h5>
                                            <h5>Age : {item.age}</h5>
                                            <h5>Salary : {item.salary}</h5>
                                            <h5>Position : {item.position}</h5>
                                        </div>
                                        <div className="card-footer d-flex justify-content-around">
                                            <button onClick={() => this.changeModal2(item.id)}
                                                    className="btn btn-warning">Edit
                                            </button>
                                            <button onClick={() => this.deletingModal(item.id)}
                                                    className="btn btn-danger">Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Modal isOpen={this.state.isOpenModal} toggle={this.changeModal}>
                                <ModalHeader toggle={this.changeModal}>Modal title</ModalHeader>
                                <ModalBody>
                                    <h5 className="text-danger">Siz bu ma'lumotni o'chirib yuborishga rozimisiz.</h5>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary"
                                            onClick={() => this.deleteForm(this.state.deletingId)}>Yes</Button>{' '}
                                    <Button color="secondary" onClick={this.changeModal}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>

                        <div className="col-md-12">
                            <Modal isOpen={this.state.isOpenModal2} toggle={this.changeModal2}>
                                <ModalHeader toggle={this.changeModal2}>Modal title</ModalHeader>
                                <ModalBody>
                                    <AvForm model={this.state.editingItem} onValidSubmit={this.editForm}>
                                        <AvField
                                            label="Ism"
                                            type="text"
                                            name="firstName"
                                            placeholder="FirstName"
                                            required
                                        />
                                        <AvField
                                            label="Familya"
                                            type="text"
                                            name="lastName"
                                            placeholder="LastName"
                                            required
                                        />
                                        <AvField
                                            label="Yosh"
                                            type="number"
                                            name="age"
                                            placeholder="Age"
                                            required
                                        />
                                        <AvField
                                            label="Salary"
                                            type="text"
                                            name="salary"
                                            placeholder="Salary"
                                            required
                                        />
                                        <AvField type="select" name="position">
                                            <option value="Security">Security</option>
                                            <option value="Programmer">Programmer</option>
                                        </AvField>
                                        <button type="submit" className="btn btn-dark form-control">Edit employee
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

export default Task9;
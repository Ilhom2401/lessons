import React from 'react';
import {useReducer, useRef} from 'react'
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function GetUseReducer(props) {
    const myForm = useRef();

    function reducer(state, action) {
        switch (action.type) {
            case 'SHOW_MODAL' :
                state = {
                    ...state,
                    isOpen: true
                };
                break;
            case 'HIDE_MODAL' :
                state = {
                    ...state,
                    isOpen: false
                };
                break;
            case 'ADD_USER' :
                state = {
                    ...state,
                };
                break;
            case 'DELETE_USER' :
                state = {
                    ...state,
                };
                break;
            case 'CHANGE_MODAL' :
                state = {
                    ...state,
                    modal: !state.modal,
                };
                break;
            case 'EDIT_USER' :
                state = {
                    ...state,
                    selectedIndex: null
                };
                break;
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        isOpen: false,
        modal: false,
        selectedItem: [],
        selectedIndex: null,
        users: []
    });

    function addCount() {
        // dispatch()
    }

    function showModal() {
        dispatch({type: "SHOW_MODAL"});

    }

    function hideModal() {
        dispatch({type: "HIDE_MODAL"});

    }

    function addUser(event, value) {
        state.users.push(value);
        dispatch({type: "ADD_USER"});
        myForm.current.reset();
    }

    function deleteUser(index) {
        state.users.splice(index, 1);
        dispatch({type: 'DELETE_USER'})
    }

    function changeModal(index) {
        state.selectedItem = state.users[index];
        state.selectedIndex = index;
        dispatch({type: 'CHANGE_MODAL'});
    }

    function editUser(event, value) {
        state.users[state.selectedIndex] = value;
        dispatch({type: 'EDIT_USER'});
        changeModal()
    }

    return (
        <div>
            <h1>{state.count}</h1>
            <button className="btn btn-dark" onClick={addCount}>Add count</button>
            <div className="container-fluid">
                <div className="row my-5">
                    <div className="col-md-8">
                        <div className="d-flex justify-content-center my-2">
                            <h3>Lavozimlar</h3>
                            <button onClick={showModal} className="btn btn-success ml-5">+Add</button>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>TR</th>
                                <th>Ism</th>
                                <th>Familya</th>
                                <th>Telefon</th>
                                <th>Lavozim</th>
                                <th>Ilmiy daraja</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {state.users.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.telephone}</td>
                                    <td>{item.position}</td>
                                    <td>{item.daraja}</td>
                                    <td>
                                        <button onClick={() => changeModal(index)} className="btn btn-warning">Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteUser(index)} className="btn btn-danger">Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        {state.isOpen ? <div className="card">
                            <div className="card-header">
                                <h4>Lavozimni qo'shish</h4>
                            </div>
                            <div className="card-body">
                                <AvForm ref={myForm} onValidSubmit={addUser}>
                                    <AvField
                                        name="name"
                                        type="text"
                                        placeholder="Ism"
                                        required
                                    />
                                    <AvField
                                        name="lastName"
                                        type="text"
                                        placeholder="Familya"
                                        required
                                    />
                                    <AvField
                                        name="telephone"
                                        type="text"
                                        placeholder="Telefon"
                                        required
                                    />
                                    <AvField name="position" type="select">
                                        <option value="">Lavozimi</option>
                                        <option value="Jamoa sardori">Jamoa sardori</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Security">Security</option>
                                    </AvField>
                                    <AvField name="daraja" type="select">
                                        <option value="">Ilmiy daraja</option>
                                        <option value="Senior">Senior</option>
                                        <option value="Middle">Middle</option>
                                        <option value="Junior">Junior</option>
                                    </AvField>
                                    <button onClick={hideModal} className="btn btn-secondary">Chiqish</button>
                                    <button type="submit" className="btn btn-primary">Saqlash</button>
                                </AvForm>
                            </div>


                        </div> : ''}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Modal isOpen={state.modal} toggle={changeModal}>
                            <ModalHeader toggle={changeModal}>Edit users</ModalHeader>
                            <ModalBody>
                                <AvForm model={state.selectedItem} onValidSubmit={editUser}>
                                    <AvField
                                        name="name"
                                        type="text"
                                        label="Ism"
                                        required
                                    />
                                    <AvField
                                        name="lastName"
                                        type="text"
                                        label="Familya"
                                        required
                                    />
                                    <AvField
                                        name="telephone"
                                        type="text"
                                        label="Telefon"
                                        required
                                    />
                                    <AvField name="position" type="select">
                                        <option value="">Lavozimi</option>
                                        <option value="Jamoa sardori">Jamoa sardori</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Security">Security</option>
                                    </AvField>
                                    <AvField name="daraja" type="select">
                                        <option value="">Ilmiy daraja</option>
                                        <option value="Senior">Senior</option>
                                        <option value="Middle">Middle</option>
                                        <option value="Junior">Junior</option>
                                    </AvField>
                                    <button type="submit" className="btn btn-primary btn-block mt-4">Saqlash</button>
                                </AvForm>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetUseReducer;
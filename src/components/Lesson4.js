import React, {Component} from 'react';
import {ButtonDropdown, DropdownToggle, Modal, ModalHeader, ModalBody, ModalFooter, DropdownMenu, DropdownItem,Collapse, Button, CardBody, Card} from 'reactstrap';

class Lesson4 extends Component {

    state = {
        myDropdown: false,
        collapse: false,
        modal: false
    };
    dropDownToggle = () => {
        this.setState({
            myDropdown: !this.state.myDropdown
        })
    };
    collapseToggle = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    };
    modalToggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };

    render() {
        const {myDropdown,collapse,modal} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-4">
                            <ButtonDropdown isOpen={myDropdown} toggle={this.dropDownToggle}>
                                <DropdownToggle caret>
                                    Button Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>

                        <div className="col-md-4">
                            <Button color="primary" onClick={this.collapseToggle}>Toggle</Button>
                            <Collapse isOpen={collapse}>
                                <Card>
                                    <CardBody>
                                        Anim pariatur cliche reprehenderit,
                                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                                        nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>

                        <div className="col-md-4">
                            <Button color="danger" onClick={this.modalToggle}>Modal</Button>
                            <Modal isOpen={modal} toggle={this.modalToggle} >
                                <ModalHeader toggle={this.modalToggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.modalToggle}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.modalToggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-12">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lesson4;
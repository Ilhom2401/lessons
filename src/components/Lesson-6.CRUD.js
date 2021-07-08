import React, {Component} from 'react';

class Lesson6Crud extends Component {

    state = {
        students: [],
        selected: -1
    };

    addStudent = (event) => {
        event.preventDefault();
        if (event.target.firstName.value !== '' && event.target.lastName.value !== '' && event.target.age.value !== '' &&
            event.target.group.value !== '' && event.target.company.value !== '') {

            let newStudent = {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                age: event.target.age.value,
                group: event.target.group.value,
                company: event.target.company.value
            };

            if (this.state.selected >= 0) {
                this.state.students[this.state.selected] = newStudent
            } else {
                this.state.students.push(newStudent);
            }

            this.setState({
                students: this.state.students,
                selected: -1
            });
            event.target.reset();
        } else {
            alert("Formani to'ldiring")
        }
    };

    deleteStudent = (index) => {
        this.state.students.splice(index, 1);
        this.setState({
            students: this.state.students
        })
    };

    editStudent = (index) => {

        this.form.firstName.value = this.state.students[index].firstName;
        this.form.lastName.value = this.state.students[index].lastName;
        this.form.age.value = this.state.students[index].age;
        this.form.group.value = this.state.students[index].group;
        this.form.company.value = this.state.students[index].company;

        this.setState({
            selected: index
        })
    };

    render() {
        const {students} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-dark text-center text-white">
                                    <h3>Add student</h3>
                                </div>
                                <div className="card-body">
                                    <form ref={(c) => this.form = c} onSubmit={this.addStudent}>
                                        <input type="text" name="firstName" placeholder="Ilhomjon"
                                               className="form-control my-2"/>
                                        <input type="text" name="lastName" placeholder="Abdunasimov"
                                               className="form-control my-2"/>
                                        <input type="number" name="age" className="form-control my-2"/>
                                        <input type="number" name="group" className="form-control my-2"/>
                                        <input type="text" name="company" placeholder="PDP"
                                               className="form-control my-2"/>
                                        <button type="submit" className="btn btn-dark btn-block mt-4">Add student
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <table className="table table-dark table-bordered">
                                <thead>
                                <tr>
                                    <th>TR</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Age</th>
                                    <th>Group</th>
                                    <th>Company</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    students.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.age}</td>
                                            <td>{item.group}</td>
                                            <td>{item.company}</td>
                                            <td>
                                                <button onClick={() => this.editStudent(index)} type="button"
                                                        className="btn btn-warning">Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => this.deleteStudent(index)} type="button"
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
                </div>
            </div>
        );
    }
}

export default Lesson6Crud;
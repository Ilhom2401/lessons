import React, {Component} from 'react';

class CrudSelfStudy extends Component {
    state = {
        students: [],
        select: -1
    };

    getInputValue = (event) => {
        event.preventDefault();
        let studentList = {
            name: event.target.name.value,
            age: event.target.age.value,
            password: event.target.password.value,
        };
        if (this.state.select >= 0) {
            this.state.students[this.state.select] = studentList
        } else {
            this.state.students.push(studentList);
        }
        this.setState({
            students: this.state.students,
            select: -1
        });
        event.target.reset()
    };

    deleteStudent = (index) => {
        this.state.students.splice(index, 1);
        this.setState({
            students: this.state.students
        })
    };

    editStudent = (index) => {
        this.form.name.value = this.state.students[index].name;
        this.form.age.value = this.state.students[index].age;
        this.form.password.value = this.state.students[index].password;
        this.setState({
            select: index
        })
    };

    render() {
        const {students} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-4">
                            <form ref={(c) => this.form = c} onSubmit={this.getInputValue}>
                                <input type="text" placeholder="Ism" name="name" className="form-control my-2"/>
                                <input type="number" placeholder="Yosh" name="age" className="form-control my-2"/>
                                <input type="password" placeholder="Parol" name="password"
                                       className="form-control my-2"/>
                                <button type="submit" className="btn btn-success form-control my-2">Adding</button>
                            </form>
                        </div>
                        <div className="col-md-8">
                            <table className="table table-bordered table-dark">
                                <thead>
                                <tr>
                                    <th>TR</th>
                                    <th>Ism</th>
                                    <th>Yosh</th>
                                    <th>Password</th>
                                    <th>Edit</th>
                                    <th>Delate</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    students.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.password}</td>
                                            <td>
                                                <button onClick={() => this.editStudent(index)}
                                                        className="btn btn-warning">Edit
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
                </div>
            </div>
        );
    }
}

export default CrudSelfStudy;
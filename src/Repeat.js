import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
class Repeat extends Component {
    state={
      student: []
    };
    addStudent=(event, value)=>{
        this.state.student.push(value);
        this.setState({
            student:this.state.student
        });
        this.form.reset()
    };
    deleteStudent=(index)=>{
        this.state.student.splice(index,1);
        this.setState({
            students:this.state.student
        })
    };
    render() {
        const {student}=this.state;
        return (
            <div>
                <div className="container-fluid">
                    <div className="row my-5">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header bg-success text-center text-white">
                                    Add student
                                </div>
                                <div className="card-body">
                                   <AvForm ref={(c)=> this.form=c} onValidSubmit={this.addStudent}>
                                       <AvField
                                       type="text"
                                       name="firstName"
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
                                           placeholder="Group"
                                           required
                                       />
                                       <button type="submit" className="btn btn-success form-control">Adding</button>
                                   </AvForm>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <table className="table-bordered table table-dark table-striped">
                                <thead>
                                <tr>
                                    <th>TR</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Age</th>
                                    <th>Group</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {student.map((item, index)=>(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.group}</td>
                                        <td>
                                            <button className="btn btn-warning">Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={()=>this.deleteStudent(index)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Repeat;
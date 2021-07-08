import React, {Component} from 'react';
import MyCard5 from "./MyCard5";

class Lesson5 extends Component {

    state = {
        student: [
            {
                name: 'Ali',
                age: 23,
                group: 77
            },
            {
                name: 'Sobir',
                age: 27,
                group: 75
            },
            {
                name: 'Toxir',
                age: 21,
                group: 78
            }

        ],
        inputValue: '',
        selectV: '',
        isChecked: false,
        myArray: [],
        taskList: ''

    };

    getInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    getSelectValue = (event) => {
        this.setState({
            selectV: event.target.value
        })
    };

    clearInput = () => {
        this.setState({
            inputValue: ''
        })
    };

    changeCheckbox = (event) => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    };

    changeInputValue = (event) => {
        this.setState({
            taskList: event.target.value
        });

    };

    addList = () => {
        this.state.myArray.push(this.state.taskList);
        this.setState({
            myArray: this.state.myArray,
            taskList: ''
        })
    };

    render() {
        const {student, inputValue, selectV, isChecked} = this.state;

        return (
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <input value={inputValue} onChange={this.getInputValue} type="text"
                                           className="form-control my-2"/>
                                    <h4>{inputValue}</h4>
                                    <button onClick={this.clearInput} className="btn btn-success">Clear</button>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <select onChange={this.getSelectValue}>
                                        <option value="">Viloyatni tanlang</option>
                                        <option value="Toshkent">Toshkent</option>
                                        <option value="Sirdaryo">Sirdaryo</option>
                                        <option value="Samarqand">Samarqand</option>
                                    </select>
                                    <h4>{selectV}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <input type="checkbox" onChange={this.changeCheckbox}/>
                                    <h4>
                                        {isChecked ? 'checked' : 'unchecked'}
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container">
                    <div className="row my-5">
                        {student.map((item, index) => (
                            <MyCard5 qiymat={item}/>
                        ))
                        }
                    </div>
                </div>

                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <input value={this.state.taskList} onChange={this.changeInputValue} type="text"
                                           className="form-control my-2"/>
                                    <button onClick={this.addList}
                                            className="btn btn-success form-control my-2">Button
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">

                                    {this.state.myArray.map( (item, index) => (
                                       <div>
                                           <h5>{index+1}. {item}</h5>
                                           <hr/>
                                       </div>
                                    ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Lesson5;
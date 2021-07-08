import React, {Component} from 'react';

class Homework extends Component {

    state = {
        users: [
            {
                name: 'Azim',
                age: 21,
                group: 'G-47'
            },
            {
                name: 'Avaz',
                age: 25,
                group: 'G-66'
            },
            {
                name: 'Sardor',
                age: 18,
                group: 'G-74'
            },
            {
                name: 'Ilhom',
                age: 21,
                group: 'G-74'
            },
            {
                name: 'Muhammad',
                age: 15,
                group: 'G-27'
            },
            {
                name: 'Javihir',
                age: 35,
                group: 'G-32'
            },
            {
                name: 'Doston',
                age: 28,
                group: 'G-55'
            }
        ],
        students: [
            {
                name: 'Doniyor',
                age: 21,
                group: 'G-47'
            },
            {
                name: 'Mahmud',
                age: 25,
                group: 'G-66'
            },
            {
                name: 'Farrux',
                age: 18,
                group: 'G-74'
            }
        ]

    };

    deleteStudent=(index)=>{

            this.state.students.splice(index, 1);

            this.setState({
                students:this.state.students
            })

    };

    render() {
        const {students} = this.state;

        const deleteIndex = (indexMap) => {
            this.state.users.splice(indexMap, 1);

            this.setState({
                users: this.state.users
            })
        };

        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-dark table-bordered">
                                <thead>
                                <tr>
                                    <th>Tr</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Group</th>
                                    <th>Control</th>
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
                                                <button onClick={()=>this.deleteStudent(index)} className="btn form-control btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <table className="table table-dark table-striped">
                        <thead>
                        <tr>
                            <th>TR</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Group</th>
                            <th>Control</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(function (item, index) {
                                return <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.group}</td>
                                    <td>
                                        <button onClick={() => deleteIndex(index)} className="btn btn-danger">Delete
                                        </button>
                                    </td>
                                </tr>

                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Homework;



// class Portfolio extends Component {
//
//     state = {
//         name: "Sobir",
//         counter: 0,
//         isShow: true
//     };
//     changeName = () => {
//         this.setState({
//             name: 'Ilhom'
//         })
//     };
//
//     show=()=> {
//         this.setState({
//             isShow:true
//         })
//     };
//
//     hide=()=> {
//         this.setState({
//             isShow:false
//         })
//     };
//
//     addCount = () => {
//         if (this.state.counter < 10) {
//             this.setState({
//                 counter: this.state.counter + 1
//             })
//         }
//     };
//
//     removeCount = () => {
//         if (this.state.counter > 0) {
//             this.setState({
//                 counter: this.state.counter - 1
//             })
//         }
//     };
//
//     render() {
//         const {name, counter, isShow} = this.state;
//         return (
//
//             <div>
//
//                 <FirstChild/>
//
//
//                 <h1>{name}</h1>
//                 <button className="btn btn-success" onClick={this.changeName}>Change NAme</button>
//                 <div className="container">
//                     <div className="row my-5">
//                         <div className="col-md-4">
//                             <div className="card">
//                                 <div className="card-header bg-dark text-center text-white">
//                                     <h1>{counter} </h1>
//                                     <p>{counter%2===0&&counter!==0 ? "juft son" : counter%2===1 ? "toq son" : "juft ham toq ham emas"}</p>
//                                 </div>
//                                 <div className="card-body d-flex justify-content-around">
//                                     <button className="btn btn-danger" onClick={this.removeCount}>-</button>
//                                     <button className="btn btn-success" onClick={this.addCount}>+</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="container my-5">
//                     <button className="btn btn-dark" onClick={this.show}>Show</button>
//                     <button className="btn btn-danger ml-5" onClick={this.hide}>Hide</button>
//
//                     {
//                         isShow ?  <div className="row my-4">
//                             <div className="col-md-4">
//                                 <div className="card text-center font-weight-bold text-danger">
//                                     Hello Ilhomjon.....
//                                 </div>
//                             </div>
//                         </div>  : ""
//                     }
//                 </div>
//             </div>
//         )
//             ;
//     }
// }
// export default Portfolio



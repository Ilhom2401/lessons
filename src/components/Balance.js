import React, {Component} from 'react';

class Balance extends Component {

    // state = {
    //     salary: this.props.salary
    // };
    // changeSalary = () => {
    //     this.setState({
    //         salary: this.state.salary + 100
    //     });
    // };


    render() {
        const {buttonFunc, salary} = this.props;
        return (
            <div>
                <button onClick={buttonFunc} className="btn btn-success text-white">Change
                    salary
                </button>
            </div>
        );
    }
}

export default Balance;
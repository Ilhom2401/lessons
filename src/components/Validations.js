import React, {Component} from 'react';
import Chars from "./Chars";
import Validation from "./Validation";

class Validations extends Component {
    state = {
        value: ''
    };

    changeValue = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    deleteValue = (index) => {
        const text = this.state.value.split('');
        text.splice(index, 1);
        const context = text.join('');
        this.setState({
            value: context
        })

    };

    render() {
        const charList = this.state.value.split('').map((item, index) => (
            <Chars character={item} key={index} deleting={() => this.deleteValue(index)}/>
        ));
        return (
            <div>
                <input type="text" onChange={this.changeValue} value={this.state.value}/>
                <p>{this.state.value}</p>
                <Validation length={this.state.value.length}/>
                {charList}
            </div>
        );
    }
}

export default Validations;
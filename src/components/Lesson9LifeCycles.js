import React, {Component} from 'react';
import LifeCycle from "./LifeCycle";
class Lesson9LifeCycles extends Component {
    state = {
        count: 100,
        name:'Bob'
    };

    componentWillMount() {
        console.log('componentWillMount worked')
    }

    componentDidMount() {
        console.log(' componentDidMount worked')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.count===500) {
            return false
        } else  {
            console.log(nextState);
            return true
        }
    }

    changeCount = () => {
        this.state.count+=100;
        this.setState({
            count:this.state.count
        })
    };

    changeName=()=> {
        this.setState({
            name: 'John'
        })
    };



    render() {
        const {count, name} = this.state;
        return (
            <div>
                {console.log('render worked')}
                <h1>{count}</h1>
                <button onClick={this.changeCount} type="button" className="btn btn-success">change count</button>
                <button onClick={this.changeName} type="button" className="btn btn-success">change name</button>
                <LifeCycle ism={name}/>
            </div>
        );
    }
}

export default Lesson9LifeCycles;
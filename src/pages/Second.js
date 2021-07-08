import React, {Component} from 'react';

class Second extends Component {
    render() {
        const {history, name} = this.props;
        return (
            <div>
                {console.log(name)}
                <h1>Second page</h1>
                <button onClick={()=> history.push('/first')}>Go first page</button>
            </div>
        );
    }
}

export default Second;
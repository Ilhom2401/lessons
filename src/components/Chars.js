import React, {Component} from 'react';

class Chars extends Component {
    render() {
        const {character, key, deleting} = this.props;
        const style = {
            display: 'inline-block',
            padding: '16px',
            margin: '16px',
            border: '1px solid black',
            textAlign: 'center'
        };
        return (
            <div style={style} key={key} onClick={deleting}>
                {character}
            </div>
        );
    }
}

export default Chars;
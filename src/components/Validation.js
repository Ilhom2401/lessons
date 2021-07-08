import React, {Component} from 'react';

class Validation extends Component {
    render() {
        const {length} = this.props;
        // let word = "'Bu kalta so'z'";
        // if (length>5)
        //     word='bu uzun soz';

        return (
            <div>
                {
                    length>5 ? <p>bu Uzun so'z</p> :
                        <p>bu Kalta so'z</p>
                }


            </div>
        );
    }
}

export default Validation;
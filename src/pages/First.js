import React, {Component} from 'react';

class First extends Component {
    render() {
        const {location}=this.props;
        return (
            <div>
                {
                    location.pathname==='/first' ? <h1 className="text-danger">First page</h1> :
                        <h1>First page</h1>
                }

            </div>
        );
    }
}

export default First;
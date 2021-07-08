import React, {Component} from 'react';

class Navbar extends Component {
    state = {
        links: [
            {title: 'Home'},
            {title: 'Mail'},
            {title: 'COVID-19'},
            {title: 'News'},
            {title: 'Finance'},
            {title: 'Sports'},
            {title: 'Entertainment'},
            {title: 'Life'},
            {title: 'Shopping'},
        ],
        width: 0
    };

    componentDidMount() {
        console.log(this.setState(width => width.window.innerWidth))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.links.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Navbar;
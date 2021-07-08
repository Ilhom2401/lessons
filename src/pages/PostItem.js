import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PostItem extends Component {
    render() {

        return (
            <div className="card">
               <div className="card-body">
                   <h6>
                       {this.props.title}
                       <Link to={"/posts/"+ this.props.id}>...more</Link>
                   </h6>
               </div>
            </div>
        );
    }
}

export default PostItem;
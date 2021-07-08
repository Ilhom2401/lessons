import React, {Component} from 'react';
import First from "../pages/First";
import Second from "../pages/Second";
import Third from "../pages/Third";
import Posts from "../pages/Posts";
import {Route, Link, Switch} from 'react-router-dom'
import PostView from "../pages/PostView";
class Lesson8SideBar extends Component {
    state = {
      name: 'Ali'
    };
    render() {
        const {name} = this.state;
        return (
            <div className="d-flex w-100">
                <div className="left-side">
                    <ul>
                        <li>
                            <Link to="/first">First</Link>
                        </li>
                        <li>
                            <Link to="/first/second">Second</Link>
                        </li>
                        <li>
                            <Link to="/third">Third</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </div>
                <div className="right-side">
                   <Switch>
                       <Route path='/first' render={(Event)=><First {...Event} value={123}/>}/>
                       <Route path='/second' render={()=><Second/>}/>
                       <Route path='/third' render={()=><Third/>}/>
                       <Route path='/posts/:id' component={PostView} />
                       <Route exact path='/posts' component={Posts} />
                   </Switch>
                </div>
            </div>
        );
    }
}

export default Lesson8SideBar;
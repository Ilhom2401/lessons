import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import TaskPosts from "../pages/TaskPosts";
import '../SideBar.css'
import TaskPost from "../pages/TaskPost"


class Task10 extends Component {
    render() {
        return (
            <div>
                <div className="d-flex w-100">
                    <div className="left-side">
                        <ul>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <Switch>
                            {/*<Route path='/first' render={(Event)=><First {...Event} value={123}/>}/>*/}
                            {/*<Route path='/second' render={()=><Second/>}/>*/}
                            {/*<Route path='/third' render={()=><Third/>}/>*/}
                            <Route exact path='/users' component={TaskPosts}/>
                            <Route path='/users/:id' component={TaskPost}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task10;
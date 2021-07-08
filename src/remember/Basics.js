import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

function Basics(props) {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>

                <ul>
                    <li>
                        <Link to="/netflix">Netflix</Link>
                    </li>
                    <li>
                        <Link to="/zillow-group">Zillow Group</Link>
                    </li>
                    <li>
                        <Link to="/yahoo">Yahoo</Link>
                    </li>
                    <li>
                        <Link to="/modus-create">Modus Create</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/:id" children={<Childs />} />
                </Switch>
            </div>
        </Router>
    );
}

function Childs() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    // console.log(useParams());
    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}

export default Basics;
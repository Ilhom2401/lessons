import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Prompt
} from "react-router-dom";

function PreventingTransitions(props) {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Form</Link>
                </li>
                <li>
                    <Link to="/one">One</Link>
                </li>
                <li>
                    <Link to="/two">Two</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/" exact children={<BlockingForm/>}/>
                <Route path="/one" children={<h3>One</h3>}/>
                <Route path="/two" children={<h3>Two</h3>}/>
            </Switch>
        </Router>
    );
}


function BlockingForm() {
    let [isBlocking, setIsBlocking] = useState(false);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                event.target.reset();
                setIsBlocking(false);
            }}
        >
            <Prompt  /*************  alert bilan bir xil   ***************/
                when={isBlocking}
                message={location =>         /*******   alert   ******/

                    `Are you sure you want to go to ${location.pathname}`

                }
            />

            <p>
                Blocking?{" "}
                {isBlocking ? "Yes, click a link or the back button" : "Nope"}
            </p>

            <p>
                <input
                    size="50"
                    placeholder="type something to block transitions"
                    onChange={event => {
                        setIsBlocking(event.target.value.length > 0);
                    }}
                />
            </p>

            <p>
                <button>Submit to stop blocking</button>
            </p>
        </form>
    );
}


export default PreventingTransitions;
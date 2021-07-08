import React from 'react';
import {connect} from "react-redux";
import UseReducer from "./components/UseReducer";
import UseReducer2 from "./components/UseReducer2";
import Products from "./components/Products";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Counter from "./components/Counter";
import Game from "./components/Game";
import Basics from "./remember/Basics";
import Nesting from "./remember/Nesting";
import CustomLink from "./remember/CustomLink";
import RedirectsAuth from "./remember/RedirectsAuth";
import PreventingTransitions from "./remember/PreventingTransitions";
import NoMatch404 from "./remember/NoMatch404";
import StyledComponent from "./remember/StyledComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    function changeName() {
        props.setName('Ilhom')
    }

    return (
        <div>
            {/*<Basics/>*/}
            {/*<hr/>*/}
            {/*<h3 className="text-center">Nesting</h3>*/}
            {/*<hr/>*/}
            {/*<Nesting/>*/}
            {/*<hr/>*/}
            {/*<h3 className="text-center">Redirects(Auth)</h3>*/}
            {/*<hr/>*/}
            {/*<RedirectsAuth/>*/}
            {/*<hr/>*/}
            {/*<h3 className="text-center">CustomLink</h3>*/}
            {/*<hr/>*/}
            {/*<CustomLink/>*/}
            {/*<hr/>*/}
            {/*<h3 className="text-center">PreventingTransitions</h3>*/}
            {/*<hr/>*/}
            {/*<PreventingTransitions/>*/}
            {/*<hr/>*/}
            {/*<h3 className="text-center">NoMatch</h3>*/}
            {/*<hr/>*/}
            {/*<NoMatch404/>*/}
            {/*<hr/>*/}
            {/*<h3 className="text-center">StyledComponent</h3>*/}
            {/*<hr/>*/}
            {/*<StyledComponent/>*/}
            <Game/>
            {/*<Counter/>*/}
            {/*<div className="container">*/}
            {/*    <div className="row my-5">*/}
            {/*        <div className="col-md-4">*/}
            {/*            <div className="card">*/}
            {/*                <div className="card-body text-center">*/}
            {/*                    <h4>{props.firstName}</h4>*/}
            {/*                    <button onClick={changeName} className="btn btn-success">Change name</button>*/}
            {/*                    <h4>{props.age}</h4>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="col-md-4">*/}
            {/*            <div className="card">*/}
            {/*                <div className="card-body text-center">*/}
            {/*                    <h4>{props.title}</h4>*/}
            {/*                    <h4>{props.price}</h4>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <Products/>*/}
            {/*</div>*/}
            {/*<UseReducer/>*/}
            {/*<UseReducer2/>*/}
            {/*<AddTask/>*/}
        </div>
    );
}

const a = connect(getState, getDispatch);

function getState(state) {
    return {
        firstName: state.userReducer.name,
        age: state.userReducer.age,
        title: state.productReducer.title,
        price: state.productReducer.price
    }
}

function getDispatch(dispatch) {
    return {
        setName: (name) => {
            dispatch({type: 'SET_NAME', payload: name})
        }
    }
}


export default a(App);
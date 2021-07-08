import React from 'react';
import {connect} from "react-redux";

function Products(props) {
    return (
        <div className="row my-5">
            {props.products.map((item, index) => (
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>{item.title}</h4>
                        </div>
                        <div className="card-body">
                            <h6>{item.price}</h6>
                            <h6>{item.weight}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const a = connect(getState, getDispatch);

function getState(state) {
    return {
        products: state.productReducer.products
    }
}

function getDispatch(dispatch) {
    return {}
}

export default a(Products);
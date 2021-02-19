import React, { Component } from 'react';


const Item = (props) => {

    return(
       
        <div className="col-lg-4">
            <div className="card my-4">
                <img className="card-img-top" src={props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <span className="card-text text-muted">${props.price}</span>
                    <p className="card-text">{props.description}</p>
                    <a onClick={() => props.changeQuantity(props.index, +1)} className="btn btn-success">Add To Cart</a>
                </div>
            </div>
        </div>

    );
    
}

export default Item;
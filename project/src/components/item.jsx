import React, { Component, createContext } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";

class Item extends Component {
    state ={}

    render(){
        return(
            <div className="item">
                <img className="itemPhoto" src={this.props.item.image}/>
                <h6 className="itemTitle">{this.props.item.title}</h6>
                <label className="itemPrice">Item Price: {this.props.item.price}</label>
                <QuantityPicker></QuantityPicker>
                <button className="btn btn-sm btn-primary">Add</button>
                <h6 className="itemDesc">{this.props.item.description}</h6>
            </div>
        );
    }
}

export default Item;
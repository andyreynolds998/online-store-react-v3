import React, { Component } from 'react';
import Item from './item';
import ItemService from './../services/itemService';
import "./catalog.css";

class Catalog extends Component {
    state = {
        items: [],
    };
    render() { 
        return ( 
            <div className="catalog-page">

               { this.state.items.map(( prod) => (
               <Item key={prod.id} item={prod}></Item>
               ))}
                
            </div>
         );
    }
    //called after the render function is executed (after something has loaded onto the users screen)
    componentDidMount(){
        //call the service to get the list of items
        var service = new ItemService();
        var items = service.getCatalog();
        this.setState({items: items});
    }
}
 
export default Catalog;
import React, { Component } from 'react';
import './index.css';
import InventoryForm from '../../components/inventoryForm';
import ProductTable from '../../components/productTable';
import DisplayForm from '../../components/displayForm';

class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      'items': []
    }
  }

  getItems = async(e) => {
    e.preventDefault();

    let name = e.target.elements.name.value;
    let price = e.target.elements.price.value;
    let desc = e.target.elements.desc.value;

    let URL = 'http://localhost:5000/api/retrieve';
    // let URL = 'http://localhost:80/api/retrieve';


    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'name': name,
        'price': price,
        'desc': desc
      }
    });

    let data = await response.json();

    this.setState({ 'items': data });
  }

  deleteEvent = async(id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }

    let URL = 'http://localhost:5000/api/delete';
    // let URL = 'http://localhost:80/api/delete';


    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'item_id': id
      }
    });

    let message = await response.json();

    if (message.success) {
      let items = this.state.items;

      for (let i in items) {
        if (items[i].id === id) {
          items.splice(i, 1);
          break;
        }
      }

      this.setState({ items });

      alert(`Item id: ${id} has been deleted.`);
    } else {
      alert(`Something went wrong. We could not delete the item.`);
    }
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-2">
        <h1>Add Item to Inventory</h1>
          <InventoryForm getItems={this.getItems}  />
          </div>
          <div className="col-md-10 offset-md-1">
            <h1>Display an Event</h1>
            <DisplayForm getEvents={this.getEvents} />
          </div>
          <div className="col-md-10 offset-md-1">
            <ProductTable deleteItem={this.deleteItem} items={this.state.items} />
        </div> {/* ends col md 8 */}
      </div> //ends row
    );
  }
}

export default Inventory;

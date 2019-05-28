import React, { Component } from 'react';
import './index.css';

class InventoryForm extends Component {
  saveItem = async(e) => {
    e.preventDefault();

    let name = e.target.elements.name.value;
    let price = e.target.elements.price.value;
    let desc = e.target.elements.desc.value;

    let URL = 'http://localhost:5000/api/save';

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'name': name,
        'price': price,
        'desc': desc
      }
    });

    let data = await response.json();

    if (data.success) {
      alert(`${name} has been added to the inventory.`);
    } else {
      alert(`Could not save item.`)
    }
  }

  render() {
    return (
      <form onSubmit={this.saveItem}>

        <div className="form-group">
          <label htmlFor="name">Item Name:</label>
          <input name="name" type="text" className="form-control" placeholder="Enter Name..." required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            name="price"
            type="number"
            className="form-control"
            placeholder="Enter Price..."
            step="0.01"
          required />
        </div>

        <div className="form-group">
          <label htmlFor="desc">Description:</label>
          <input name="desc" type="text" className="form-control" placeholder="Enter Description..." required />
        </div>

        <button type="submit" className="btn btn-primary">Add to Inventory</button>
      </form>
    );
  }
}

export default InventoryForm;

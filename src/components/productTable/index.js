import React, { Component } from 'react';
import './index.css';

class ProductTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Delete Item</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.items[0] &&
              this.props.items.map( item =>
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.desc}</td>
                  <td>
                    <button onClick={() => this.props.deleteItem(item.id)} className="btn btn-danger">Delete Item</button>
                  </td>
                </tr>
              )
          }
        </tbody>
      </table>
    );
  }
}

export default ProductTable;

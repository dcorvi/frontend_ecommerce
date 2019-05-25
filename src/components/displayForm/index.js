import React, { Component } from 'react';
import './index.css';

class DisplayForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.getItems}>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" className="form-control" placeholder="Enter Name..." />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
              name="price"
              type="number"
              step="0.01"
              className="form-control"
              placeholder="Enter Price..."
          />
        </div>

        <button type="submit" className="btn btn-primary">Get Items</button>
      </form>
    );
  }
}

export default DisplayForm;

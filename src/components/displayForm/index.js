import React, { Component } from 'react';
import './index.css';

class DisplayForm extends Component {
  render() {
    return (
      <form className="DisplayForm" onSubmit={this.props.getItems}>
      <div className="form-row">
        <div className="form-group col-md-6">
            <input
                name="name"
                type="text"
                placeholder="Enter Name..."
                className="form-control"
            />
        </div>
        <div className="form-group col-md-6">
            <input
                name="price"
                type="number"
                step="0.01"
                placeholder="Enter Price..."
                className="form-control"
            />
        </div>
      </div>
            <button type="submit" className="btn btn-primary btn-block">Get Items</button>
          </form>

    );
  }
}

export default DisplayForm;

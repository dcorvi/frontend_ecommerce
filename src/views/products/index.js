import React, { Component } from 'react';
import './index.css';
import CartTable from '../../components/cartTable';

class Products extends Component {
  constructor() {
    super();
      this.state = { items: [] };
      // 'items': [],
      // 'cart': []
    }
  // }

componentWillMount() {
  fetch(`http://localhost:5000/api/retrieve`)
  .then(res => res.json())
  .then(json => this.setState({ items: json }));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        <h1>Products</h1>
        <div>
          <ul>
            {this.state.items.map(item => (
              <li>
                {item.name}: {item.price} - {item.desc}
              </li>
            ))}
          </ul>
        </div>
        </div> {/* ends col md 8 */}
      </div> //ends row
    );
  }
}

export default Products;

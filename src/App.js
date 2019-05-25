import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import {Switch, Route} from 'react-router-dom';
import Products from './views/products';
import Checkout from './views/checkout';
import Inventory from './views/inventory';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Products />} />
            <Route exact path='/index' render={() => <Products />} />
            <Route exact path='/products' render={() => <Products />} />
            <Route exact path='/checkout' render={() => <Checkout />} />
            <Route exact path='/inventory' render={() => <Inventory />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

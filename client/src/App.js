import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import components

import StoreComponents from './store/storeComponents';
import CartComponents from './cart/cartComponents';
import WalletComponents from './wallet/walletComponents';

// Import actions

import cartActions from './cart/cartActions';

// Build site structure

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      money: 20,
      items: [
        {
          name: "apple",
          plural: "apples",
          price: 1,
          onShelf: 10,
          inCart: 0
        },
        {
          name: "banana",
          plural: "bananas",
          price: .5,
          onShelf: 5,
          inCart: 0
        },
        {
          name: "celery",
          plural: "celery",
          price: 1.5,
          onShelf: 8,
          inCart: 0
        },
        {
          name: "date",
          plural: "dates",
          price: 2,
          onShelf: 12,
          inCart: 0
        }
      ]
    };
    
    this.state.setState = () => {};
    
  }
  
  render() {
    
    return (
      <div className="container">

        {StoreComponents.StoreTable(this.state)}

        {CartComponents.CartTable(
          // props
          this.state,
          // eventHandlers
          {
            addToCart: cartActions.addToCart,
            removeFromCart: cartActions.removeFromCart
          }
        )}
        
        {WalletComponents.WalletTable(this.state)}
        
        <div>
          <button onClick={() => console.log(this.state.items)}>Show state</button>
        </div>
      </div>
    );
  }
}

export default App;

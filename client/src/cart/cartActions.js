
import walletProjections from '../wallet/walletProjections';


// Add an item to the cart
var addToCart = function (props,itemID) {

  if(!walletProjections.itemAffordable(props, itemID)) {
    
    alert("Not enough money in wallet.");
    return;
    
  }
  
  // Check inventory, alert and escape on zero
  if ( props.items[itemID].onShelf == 0 ) {
    alert("No " + props.items[itemID].plural + " on the shelf.");  
    return;
  }
  
  props.items[itemID].onShelf -= 1;
  props.items[itemID].inCart += 1;

  this.setState({items: props.items});


};

// Remove an item from the cart
var removeFromCart = function (props, itemID) {
  
  //Check cart inventory, alert and escape on zero
  if ( props.items[itemID].inCart == 0 ) {
    alert("No " + props.items[itemID].plural + " in your cart.");
    return;
  }
  
  props.items[itemID].onShelf += 1;
  props.items[itemID].inCart -= 1;

  this.setState({items: props.items});

  
};

export default {addToCart, removeFromCart};
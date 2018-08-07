
// Add an item to the cart
var addToCart = function (state,itemID) {
  
//  alert('You tried to add a ' + state.items[itemID].name + ' to your cart!');


  const itemsSlice = state.items.slice();
    
    itemsSlice[itemID].onShelf -= 1;
    itemsSlice[itemID].inCart += 1;
    state.setState({items: itemsSlice});
  
  console.log("Item: " + state.items[itemID].plural);  
  console.log('On shelf :' + state.items[itemID].onShelf);
  console.log('In cart :' + state.items[itemID].inCart);
  
};

// Remove an item from the cart
var removeFromCart = function (state, itemID) {
  
//  alert('You tried to remove a ' + state.items[itemID].name + ' from your cart!');
  
  const items = state.items.slice();
    
    items[itemID].onShelf += 1;
    items[itemID].inCart -= 1;
    state.setState({items: items});
    
  console.log('On shelf :' + state.items[itemID].onShelf);
  console.log('In cart :' + state.items[itemID].inCart);
  
};

export default {addToCart, removeFromCart};
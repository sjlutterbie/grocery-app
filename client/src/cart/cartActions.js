
// Add an item to the cart
var addToCart = function (item) {
    
    alert('You tried to add a ' + item.name + ' to your cart!');

    item.onShelf =- 1;
    item.inCart =+ 1;

};

// Remove an item from the cart
var removeFromCart = function (item) {
  // TO DO //  
};

export default {addToCart, removeFromCart};
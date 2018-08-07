var cartCost = function(items) {
    
    var total = 0;
    var item = {};
    
    for (item of items) {
        total += item.price * item.inCart;
    }
    
    return total;
    
}

var moneyRemaining = function(money, cartCost) {
    
    return money - cartCost;
    
}

export default {cartCost, moneyRemaining};
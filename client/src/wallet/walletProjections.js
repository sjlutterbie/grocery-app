function cartCost(items) {
    
    var total = 0;
    var item = {};
    
    for (item in items) {
        total += items[item].price * items[item].inCart;
    }
    
    return total;
    
}

function moneyRemaining (money, cartCost) {
    
    return money - cartCost;
    
}

function itemAffordable(props, itemID) {
    
    var cartCost = this.cartCost(props.items);
    var moneyRemaining = this.moneyRemaining(props.money, cartCost);
    
    console.log("Money remaining: " + moneyRemaining);
    console.log("Item cost: " + props.items[itemID].price);
    
    return (moneyRemaining >= props.items[itemID].price);
    
}

export default {cartCost, moneyRemaining, itemAffordable};


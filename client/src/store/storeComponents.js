import React from 'react';

function StoreTable(props) {
    
    var rows = [];
    var item = {};
    
    for(item of props.items) {
        rows.push(
            StoreTableRow(item, item.plural)
        );
    }
    
    return(
        <div className="StoreTableContainer">
            <table className="StoreTable">
                <thead>
                    <tr>
                        <td>Items</td>
                        <td>Cost</td>
                        <td>On Shelf</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

function StoreTableRow(item, key) {
    
    var plural = item.plural;
        // Capitalize first letter
        plural = plural.charAt(0).toUpperCase() + plural.slice(1);
        
    var price = item.price;
        // Format as currency
        price = "$" + price.toFixed(2);

    var onShelf = item.onShelf;
    
    return(
        <tr className="StoreTableRow" key={key}>
            <td>{plural}</td>
            <td>{price}</td>
            <td>{onShelf}</td>
        </tr>
    );
}


export default {StoreTable, StoreTableRow};
import React, { Component } from 'react';

function CartTable(props,eventHandlers) {
    
    var rows = [];
    
    for (var itemID in props.items) {
        rows.push(
            CartTableRow(props, eventHandlers, itemID)
        );
    }
    
    return (
      <div className="CartTableContainer">
        <table className="CartTable">
            <thead>
                <tr>
                    <th colSpan="3">
                        Shopping Cart
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
      </div>
    );
}

function CartTableRow(props, eventHandlers, itemID) {
    
    console.log("CTR");
    console.log(props);
    console.log(eventHandlers);

    return(
        <tr className="CartTableRow" key={itemID}>
            <td>
                <button
                    onClick={() => eventHandlers.addToCart(props,itemID)}
                >+</button>
            </td>
            <td>
                {props.items[itemID].inCart}
            </td>
            <td>
                <button
                    onClick={() => eventHandlers.removeFromCart(props,itemID)}
                >-</button>
            </td>
        </tr>
    );
}

export default {CartTable, CartTableRow};
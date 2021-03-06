import React, { Component } from 'react';

import Projections from './walletProjections';

function WalletTable(props) {
    
    var cartCost = Projections.cartCost(props.items);
    
    var moneyRemaining = Projections.moneyRemaining(props.money, cartCost);
    

    // Format both values as currency
        cartCost = "$" + cartCost.toFixed(2);
        moneyRemaining = "$" + moneyRemaining.toFixed(2);
        var moneyDisplay = "$" + props.money.toFixed(2);
    
    return(
        <div className="WalletContainer">
            <table className="Wallet">
                <thead>
                    <tr>
                        <th colSpan="2">Wallet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Money:</td>
                        <td>{moneyDisplay}</td>
                    </tr>
                    <tr>
                        <td>Cost:</td>
                        <td>{cartCost}</td>
                    </tr>
                    <tr>
                        <td>Money remaining:</td>
                        <td>{moneyRemaining}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default {WalletTable};
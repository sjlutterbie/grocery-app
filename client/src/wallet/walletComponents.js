import React, { Component } from 'react';

import Projections from './walletProjections';

class WalletTable extends React.Component{
    
    render() {
        
        var cartCost = Projections.cartCost(this.props.items);

        
        var moneyRemaining = Projections.moneyRemaining(
            this.props.money, cartCost);
        
        // Format both values as currency
            cartCost = "$" + cartCost.toFixed(2);
            moneyRemaining = "$" + moneyRemaining.toFixed(2);
    
        return (
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
                            <td>{this.props.money}</td>
                        </tr>
                        <tr>
                            <td>Cost:</td>
                            <td>{cartCost}</td>
                        </tr>
                        <tr>
                            <td>Money Remaining:</td>
                            <td>{moneyRemaining}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default {WalletTable};
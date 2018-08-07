import React, { Component } from 'react';

class WalletTable extends React.Component{
    
    render() {
        return (
            <div className="WalletContainer">
                <table className="Wallet">
                    <thead>
                        <tr>
                            <th colSpan="2">Wallet</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Money:</td>
                        <td>{this.props.money}</td>
                    </tr>
                    <tr>
                        <td>Cost:</td>
                        <td>[Cost]</td>
                    </tr>
                    <tr>
                        <td>Money Remaining:</td>
                        <td>[MoneyRemaining]</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default {WalletTable};
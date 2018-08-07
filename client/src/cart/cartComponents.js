import React, { Component } from 'react';

// Import actions

class CartTable extends React.Component {
    render() {
        
        var rows = [];

        for (var i in this.props.items) {
            rows.push(
                <CartTableRow
                    itemID={i}
                    item={this.props.state.items[i]}
                    state={this.props.state}
                    key={this.props.items[i].plural}
                    eventHandlers={this.props.eventHandlers}
                />    
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
}

class CartTableRow extends React.PureComponent{
    
    render() {

        return (
            <tr className="CartTableRow">
                <td>
                    <button
                        onClick={() => this.props.eventHandlers.addToCart(this.props.state,this.props.itemID)}
                    > + </button>
                </td>
                <td>
                    {this.props.state.items[this.props.itemID].inCart}
                </td>
                <td>
                    <button
                        onClick={() => this.props.eventHandlers.removeFromCart(this.props.state,this.props.itemID)}
                    > - </button>
                </td>
            </tr>
        );
    }
}

export default {CartTable, CartTableRow};
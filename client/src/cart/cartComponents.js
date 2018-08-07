import React, { Component } from 'react';

// Import actions

class CartTable extends React.Component {
    render() {
        
        var rows = [];
        var item = {};

        for (item of this.props.items) {
            rows.push(
                <CartTableRow
                    item={item}
                    key={item.plural}
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

class CartTableRow extends React.Component{

    render() {

        return (
            <tr className="CartTableRow">
                <td>
                    <button
                        onClick={() => this.props.eventHandlers.addToCart(this.props.item)}
                    > + </button>
                </td>
                <td>
                    {this.props.item.inCart}
                </td>
                <td>
                    <button
                        onClick={() => alert('You clicked -')}
                    > - </button>
                </td>
            </tr>
        );
    }
}

export default {CartTable, CartTableRow};
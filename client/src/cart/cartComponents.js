import React, { Component } from 'react';

class CartTable extends React.Component {
    render() {
        
        var rows = [];
        var item = {};
        
        for (item of this.props.items) {
            rows.push(
                <CartTableRow item={item} key={item.plural} />    
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
                    <button> + </button>
                </td>
                <td>
                    {this.props.item.inCart}
                </td>
                <td>
                    <button> - </button>
                </td>
            </tr>
        );
    }
}

export default {CartTable, CartTableRow};
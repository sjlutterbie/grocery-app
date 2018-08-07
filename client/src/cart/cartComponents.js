import React, { Component } from 'react';

class CartTable extends React.Component {
    render() {
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
                    <CartTableRow />
                    <CartTableRow />
                    <CartTableRow />
                    <CartTableRow />
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
                    [ItemCartQuantity]
                </td>
                <td>
                    <button> - </button>
                </td>
            </tr>
        );
    }
}

export default {CartTable, CartTableRow};
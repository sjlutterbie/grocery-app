import React from 'react';

class StoreTable extends React.Component{
    render() {
        
        var rows = [];
        var item = {};
    
        for(item of this.props.items) {
            rows.push(
                <StoreTableRow item={item} key={item.plural}/>
            );
        }

        return (
            <div className="StoreTableContainer">
                <table className="StoreTable">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Cost</th>
                            <th>On Shelf</th>
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

class StoreTableRow extends React.Component {
    render() {
        
        var plural = this.props.item.plural;
            // Capitalize first letter
            plural = plural.charAt(0).toUpperCase() + plural.slice(1);
            
        var price = this.props.item.price;
            // Format as currency
            price = "$" + price.toFixed(2);
            
        var onShelf = this.props.item.onShelf;
        
        return (
            <tr className="StoreTableRow">
                <td>
                    {plural}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    {onShelf}
                </td>
            </tr>
        );
    }
}


export default {StoreTable, StoreTableRow};
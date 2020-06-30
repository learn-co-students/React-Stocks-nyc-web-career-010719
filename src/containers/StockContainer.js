import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.availableStocks.map(stock => {
      return (
        <Stock
          key={stock.id}
          stock={stock}
          availableStocks={this.props.availableStocks}
          buyStock={this.props.buyStock}
          parent={"stock"}
        />
        )
    })
  }


  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;

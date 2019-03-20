import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    let { stocks, buyStock } = this.props
    return stocks.map(stock => <Stock key={stock.id} stock={stock} buyStock={buyStock}/>)
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

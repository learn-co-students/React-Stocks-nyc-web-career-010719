import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderAllStocks = () => {
    return this.props.allStocks.map(stock => {
      return <Stock stock={stock}
        allStocks={this.props.allStocks}
        buyStock={this.props.buyStock}
        myStocks={this.props.myStocks}
        sellStocks={this.props.sellStock}
        renderAllStocks={this.renderAllStocks}
      />
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderAllStocks()}
      </div>
    );
  }

}

export default StockContainer;

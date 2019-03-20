import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.filteredStocks.map(stock => {
      return !this.props.portfolio.includes(stock) ? <Stock {...stock} key={stock.id} stockClicks={this.props.stockClicks} /> : null
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

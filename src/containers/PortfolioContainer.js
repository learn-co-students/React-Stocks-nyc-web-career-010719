import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    let { stocks, sellStock } = this.props
    return stocks.map(stock => <Stock key={stock.ticker} stock={stock} sellStock={sellStock}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;

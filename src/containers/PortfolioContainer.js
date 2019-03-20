import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderMyStocks = () => {
    return this.props.myStocks.map(stock => {
      return <Stock key={stock.id} stock={stock} stockName={stock.name} stockTicker={stock.ticker} handleClick={this.props.handleSale} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderMyStocks()

          }
      </div>
    );
  }

}

export default PortfolioContainer;

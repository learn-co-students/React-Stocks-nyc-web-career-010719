import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolioStocks = () => {
    return this.props.portfolio.map(stock => {
      return <Stock {...stock} key={stock.id} stockClicks={this.props.stockClicks} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortfolioStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;

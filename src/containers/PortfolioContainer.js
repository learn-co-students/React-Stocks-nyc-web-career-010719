import React, { Component } from 'react';
import Stock from '../components/Stock'
import Portfolio from '../components/Portfolio'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.portfolio.map(p => {
      return <Portfolio portfolio={p} sellStockP={this.props.sellStockP}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;

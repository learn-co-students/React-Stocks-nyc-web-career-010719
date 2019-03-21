import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    return this.props.portfolio.map(stock => {
      return (
        <Stock
          key={stock.id}
          stock={stock}
          portfolio={this.props.portfolio}
          sellStock={this.props.sellStock}
          parent={"portfolio"}
        />
        )
    })
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

import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div className="border">
        <h2>Stocks</h2>
        {
          this.props.stocks.map( stock => {
            return <Stock stock={stock} addOrRemove={this.props.addToPortfolio}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;

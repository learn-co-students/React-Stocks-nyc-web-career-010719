import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {




  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.props.portfolioStocks.map(stock=>{
          return  <div className="card" {...stock} key={stock.id} onClick={this.props.removeStock}>
                <p>{stock.name} </p>
                <p>{stock.price}</p>
                </div>
          })
        }
      </div>
    );
  }

}

export default PortfolioContainer;

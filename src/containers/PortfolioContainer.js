import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div className="border">
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map( stock => {
              return <Stock stock={stock} addOrRemove={this.props.removeFromPortfolio}/>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;

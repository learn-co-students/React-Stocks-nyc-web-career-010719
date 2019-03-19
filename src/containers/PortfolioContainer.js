import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.portfolio.map(port => {
      return <Stock stock={port} handleClick={this.props.handleClick}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderPortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;

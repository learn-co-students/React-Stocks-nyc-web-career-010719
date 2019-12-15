import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  constructor(props){
    super(props)
  }
  renderPortfolio(){
    // console.log('portfolio container',this.props)
    return this.props.portfolio.map((stock,id)=>
      <Stock
        key={stock.id}
        stock={stock}
        handleClick={this.props.removeFromPortfolio}
      />)

  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
      
          {
            //render your portfolio stocks here
            this.renderPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;

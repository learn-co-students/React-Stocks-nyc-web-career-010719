import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  constructor(props){
    super(props)
  }
  renderStocks(){
    // console.log('stock container',this.props)
    return this.props.stocks.map((stock,id)=>
      <Stock
        key={stock.id}
        stock={stock}
        handleClick={this.props.handleClick}
      />)

  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;

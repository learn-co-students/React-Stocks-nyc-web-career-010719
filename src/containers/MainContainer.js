import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(props){
    super(props)
    // console.log('main container',this.props)


  }



  render() {

    return (
      <div>
        <SearchBar
          handleFilter={this.props.handleFilter}
          handleSort={this.props.handleSort}
          alphaChecked={this.props.alphaChecked}
          priceChecked={this.props.priceChecked}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.props.stocks}
                handleClick={this.props.handleClick}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.props.portfolio}
                removeFromPortfolio={this.props.removeFromPortfolio}

              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

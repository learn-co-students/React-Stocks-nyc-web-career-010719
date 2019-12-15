import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    purchased: [],
    checked: false,
    filter: "Default",
    allStocks: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/stocks")
    .then(r=>r.json())
    .then(stocks => {
      this.setState({
        stocks: stocks,
        allStocks: stocks
       })
    })
  }

  handlePurchase = (stock) => {
    this.setState({
      purchased: [...this.state.purchased, stock]
    })
  }

  handleSale = (stock) => {
    let newArr = [...this.state.purchased]
    newArr = newArr.filter(stck => stck.id !== stock.id)
    this.setState({
      purchased: newArr
    })
  }

  checkRadio = (e) => {
    console.log(this.state.allStocks)
    const arr = [...this.state.allStocks]
    if (e.target.value === "Alphabetically") {
      let sorted = [...arr].sort(function(a,b){
        var x = a.name.toLowerCase();
			  var y = b.name.toLowerCase();
			  if (x < y) {return -1;}
			  if (x > y) {return 1;}
  			return 0;
      })
      this.setState({
        stocks: sorted,
        filter: "Alphabetically"
      })
      return <StockContainer handlePurchase={this.handlePurchase} stocks={this.state.stocks} />
    } else if (e.target.value === "Price") {
      let sorted = [...arr].sort(function(a,b){
        return b.price - a.price
      })
      this.setState({
        stocks: sorted,
        filter: "Price"
      })
      return <StockContainer handlePurchase={this.handlePurchase} stocks={this.state.stocks} />
    } else if (e.target.value === "Default") {
      this.setState({
        stocks: arr,
        filter: "Default"
      })
      return <StockContainer handlePurchase={this.handlePurchase} stocks={this.state.stocks} />
    } else if (e.target.value === "Tech") {
      let techArr = [...arr].filter(stock => stock.type === e.target.value)
      this.setState({
        stocks: techArr,
        filter: e.target.value
      })
      return <StockContainer handlePurchase={this.handlePurchase} stocks={this.state.stocks} />
    } else if (e.target.value === "Sportswear") {
      let sportswearArr = [...arr].filter(stock => stock.type === e.target.value)
      this.setState({
        stocks: sportswearArr,
        filter: e.target.value
      })
      return <StockContainer handlePurchase={this.handlePurchase} stocks={this.state.stocks} />
    } else if (e.target.value === "Finance") {
      let financeArr = [...arr].filter(stock => stock.type === e.target.value)
      this.setState({
        stocks: financeArr,
        filter: e.target.value
      })
      return <StockContainer handlePurchase={this.handlePurchase} stocks={this.state.stocks} />
    }
  }

  render() {
    return (
      <div>
        <SearchBar checkRadio={this.checkRadio} checked={this.state.checked} />

          <div className="row">
            <div className="col-8">
              {(e)=>this.checkRadio(e)}
              // <StockContainer handlePurchase={this.handlePurchase} stocks={this.state.stocks} />
            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.purchased} handleSale={this.handleSale}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

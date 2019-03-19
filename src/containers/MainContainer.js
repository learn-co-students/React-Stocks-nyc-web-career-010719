import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      myStocks: [],
      filteredStocks: []
    }
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(r => this.setState({stocks: r}))
  }

  componentDidMount(){
    this.fetchStocks()
  }

  addStock = (arg) => {
    let currentStock = this.state.myStocks
    currentStock.push(arg)
    this.setState({myStocks: currentStock})
  }

  removeStock = (arg) => {
    let currentStock = this.state.myStocks
    for(var i = this.state.myStocks.length - 1; i >= 0; i--) {
      if(this.state.myStocks[i] === arg) {
       this.state.myStocks.splice(i, 1);
      }
    }
    this.setState({myStocks: currentStock})
  }

  filterStocks = (arg) => {
    let newArr = this.state.stocks.filter(stock => stock.type == arg)
    this.setState({filteredStocks: newArr})
  }

  orderStocks = (arg) => {
    let newArr = []

    if (arg == "Alphabetically"){
      newArr = this.state.stocks.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    }
    else {
      newArr = this.state.stocks.sort(function(a, b){
       if(a.price < b.price) { return -1; }
       if(a.price > b.price) { return 1; }
       return 0;
      })
    }

    this.setState({filteredStocks: newArr})
  }

  render() {
    return (
      <div>
        <SearchBar filterFunc={(arg) => this.filterStocks(arg)} handelRadio={(arg) => this.orderStocks(arg)}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filteredStocks} clickFunc={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} clickFunc={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

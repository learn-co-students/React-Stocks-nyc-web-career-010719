import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state={
    stocks:[],
    portfolio:[],
    priceChecked:false,
    alphaChecked:false

  }
  addToPortfolio=(stock)=>{
    // console.log('in add to portfolio click',this.state.portfolio)
    if(!this.state.portfolio.includes(stock)){
      let newPortfolio=[...this.state.portfolio,stock]
      this.setState({portfolio:newPortfolio})
    }

  }
  removeFromPortfolio=(stock)=>{
    // console.log('in removefrom portfolio click',this.state.portfolio)
    let newPortfolio = [...this.state.portfolio]
    newPortfolio=newPortfolio.filter(s=>s!==stock)
    this.setState({portfolio:newPortfolio})

  }
  handleFilter=(filt)=>{
    console.log('in filter',filt)
    // this.getStocks()
    if(filt!=='All'){

      let newStocks=[...this.state.allStocks]
      newStocks = newStocks.filter(s=>s.type==filt)
      console.log('in if filter', newStocks)
      this.setState({stocks:newStocks})

    }else{
      this.getStocks()
    }

  }
  handleSort=(sortBy)=>{
    let newStocks = [...this.state.stocks]
    if(sortBy=='Alphabetically'){
      this.setState({
        alphaChecked:!this.state.alphaChecked,
        priceChecked:false})


      newStocks.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
      return 0;})
    }
    else if (sortBy=='Price') {
      this.setState({
        priceChecked:!this.state.priceChecked,
        alphaChecked:false
      })

      newStocks.sort(function(a, b){return a.price-b.price})
    }
    this.setState({stocks:newStocks})
  }

  getStocks(){
    // console.log('get stocks')
    fetch('http://localhost:3000/stocks')
      .then(res=>res.json())
      .then(stocks=>this.setState({stocks,allStocks:stocks}))
  }

  componentDidMount(){
    // console.log('component did mount')
    this.getStocks()
  }
  render() {
    console.log('render stocks',this.state.stocks)
    // console.log('app stocks state',this.state.stocks)
    return (
      <div>
        <Header
        />
        <MainContainer
          handleFilter={this.handleFilter}
          handleSort={this.handleSort}
          alphaChecked={this.state.alphaChecked}
          priceChecked={this.state.priceChecked}
          stocks={this.state.stocks}
          portfolio={this.state.portfolio}
          handleClick={this.addToPortfolio}
          removeFromPortfolio={this.removeFromPortfolio}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
  state = {
    allStocks: [],
    myPortfolio: [],
    filteredStocks: [],
    sortedStocks: [],
    action: '',
  };

  componentDidMount() {
    this.getStocks();
  };

  getStocks = () => {
    this.setState({
      allStocks: [],
    }, () => {
      fetch('http://localhost:3000/stocks')
      .then(r => r.json())
      .then(stocks => {
        stocks.forEach(stock => {
          this.setState({
            allStocks: [...this.state.allStocks, stock],
          });
        });
      });
    });
  };

  buy = stock => {
    this.setState({
      myPortfolio: [...this.state.myPortfolio, stock],
    });
  };

  sell = stock => {
    let index;
    index = this.state.myPortfolio.indexOf(stock);
    let newPortfolio = [...this.state.myPortfolio];
    newPortfolio.splice(index, 1);
    this.setState({
      myPortfolio: newPortfolio,
    });
  };

  buyOrSell = id => {
    let stock;
    stock = this.state.allStocks.find(s => {
      return s.id === id;
    });

    this.state.myPortfolio.includes(stock)
      ?
    this.sell(stock)
      :
    this.buy(stock);
  };

  handleFilter = e => {
    let filteredStocks;
    if (e.target.value !== 'All') {
      filteredStocks = this.state.allStocks.filter(stock => {
        return stock.type === e.target.value;
      });
      this.setState({ filteredStocks, action: 'filter' },
      /* () => console.log(this.state.filteredStocks) */);
    } else {
      this.setState({
        filteredStocks: [...this.state.allStocks]
      },
      /* () => console.log(this.state.filteredStocks) */);
    };
  };

  handleSort = e => {
    let sortedStocks;
    if (e.target.value === 'Price') {
      sortedStocks = this.state.allStocks.sort((a, b) => {
        return b.price - a.price;
      });
      this.setState({ sortedStocks, action: 'sort' });
    } else if (e.target.value === 'Alphabetically') {
      sortedStocks = this.state.allStocks.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      });
      this.setState({ sortedStocks, action: 'sort' });
    };
  };

  render() {
    return (
      <div>
        <SearchBar
          handleFilter={this.handleFilter}
          handleSort={this.handleSort}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              buyOrSell={this.buyOrSell}
              stocks={this.state.allStocks}
              filtered={this.state.filteredStocks}
              sorted={this.state.sortedStocks}
              action={this.state.action}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              buyOrSell={this.buyOrSell}
              stocks={this.state.myPortfolio}
            />
          </div>
        </div>
      </div>
    );
  };
};

export default MainContainer;

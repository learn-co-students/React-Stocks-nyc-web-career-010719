import React from 'react'

const Stock = props => {
  // console.log(props)
    function addOrRemoveStock() {
    if (props.portfolioStocks.includes(props.stock.id)) {
      props.removeStockFromPortfolio(props.stock.id);
    } else {
      props.addStockToPortfolio(props.stock.id);
    }
  }

  return (
    <div onClick={addOrRemoveStock}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.stock.name}</h5>
          <p className="card-text">
            Type: {props.stock.type}, Price:{" $"}
            {props.stock.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stock;

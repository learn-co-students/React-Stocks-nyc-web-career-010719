import React from 'react'

const Stock = (props) => (


  <div>
    <div className="card">
      <div className="card-body" onClick={(event) => inMyPortfolio(event, props)}>
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">{props.stock.price}</p>
      </div>
    </div>


  </div>
);

const inMyPortfolio = (event, props) => {
  if (!props.myStocks.includes(props.stock)){
    props.buyStock(props.stock.id)
  }
  else if (props.myStocks.includes(props.stock)) {
    props.sellStock(props.stock.id)
  }
}


export default Stock
// props.myStocks.find(props.stock)

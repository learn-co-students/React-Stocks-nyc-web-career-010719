import React from 'react'

const Stock = (props) => {
  // console.log("props", props.stock);

  return (
    <div>
      <div className="card" onClick={ () => props.addOrRemove(props.stock)}>
        <div className="card-body">
          <h5 className="card-title">{props.stock.name}</h5>
          <p className="card-text">{props.stock.ticker}</p>
          <p className="card-text">Sector: {props.stock.type}</p>
          <p className="card-text">${props.stock.price}</p>
        </div>
      </div>
    </div>
  );
}


export default Stock

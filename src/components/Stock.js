import React from 'react'

const Stock = (props) => {

  return(
    <div>

      <div className="card">
        <div className="card-body" onClick={() => props.handleClick(props.stock)}>
          <h5 className="card-title">{
            props.stockName
            }</h5>
          <p className="card-text">{
            props.stockTicker
            }</p>
        </div>
      </div>
    </div>
  )
}

export default Stock

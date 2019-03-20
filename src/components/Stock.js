import React from 'react'

const Stock = (props) => {

  const stockClickHandler = () => {
    props.stockClicks(props.id)
  }

  return(
    <div>
      <div className="card" onClick={stockClickHandler}>
        <div className="card-body">
          <h5 className="card-title">
            {props.name}
          </h5>
          <p className="card-text">
            {props.ticker}: {props.price}</p>
        </div>
      </div>


    </div>
  )
};

export default Stock

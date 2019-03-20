import React from 'react'

const Stock = (prop) => {

  const grabStock = (e) => {
    prop.sellStock(e.target.id)
  }
  return (
    <div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title" onClick={grabStock} id={prop.stock.id}>{prop.stock.name}</h5>
          <p className="card-text">{prop.stock.price}</p>
        </div>
      </div>


    </div>
  )
};
export default Stock

import React from 'react'

const Portfolio = (prop) => {

  const grabPortfolio = (e) => {
    prop.sellStockP(e.target.id)
  }

  return (
    <div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title" onClick={grabPortfolio} id={prop.portfolio.id}>{prop.portfolio.name}</h5>
          <p className="card-text">{prop.portfolio.price}</p>
        </div>
      </div>


    </div>
  )
};
export default Portfolio

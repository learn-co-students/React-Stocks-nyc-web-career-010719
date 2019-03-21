import React from 'react'

class Stock extends React.Component {

  state = {
    owned: false
  }

  buyThisStock = (e) => {
    e.preventDefault()
    this.props.buyStock(this.props.stock)
  }

  sellThisStock = (e) => {
    e.preventDefault()
    this.props.sellStock(this.props.stock)
  }

  renderButton = () => {
    if (this.props.parent === "stock") {
      return <button onClick={this.buyThisStock}>Buy</button>
    } else if (this.props.parent === "portfolio") {
      return <button onClick={this.sellThisStock}>Sell</button>
    }
  }

  render() {
    return (
      <div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{
                this.props.stock.name
              }</h5>
            <p className="card-text">{
                this.props.stock.price
              }</p>
          </div>
          {this.renderButton()}
        </div>


      </div>
    );
  }
}

export default Stock

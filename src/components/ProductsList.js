import React, { Component } from "react";
import { fetch } from "services/fetcher"

class ProductsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch("products", (products) => { this.setState({products})})
  }

  renderProducts() {
    return this.state.products.map((product, index) => {
      return(
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    })
  }

  render() {
    return(
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {this.renderProducts()}
        </tbody>
      </table>
    );
  }
};

export default ProductsList;

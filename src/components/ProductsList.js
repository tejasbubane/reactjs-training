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
          <td>{index + 1}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    })
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Price</th>
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

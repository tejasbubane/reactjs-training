import React, { Component } from "react";
import { fetch } from "services/fetcher"
import ProductFilters from "./ProductFilters";

class ProductsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      filters: {
        priceRange: { min: 0, max: 200000 }
      }
    }
  }

  fetchData = () => {
    let { min: min_price, max: max_price } = this.state.filters.priceRange,
        params = { min_price, max_price };
    
    fetch("products", (products) => { this.setState({products})}, params)    
  }
  
  componentDidMount() {
    this.fetchData()
  }

  changePriceRangeFilter = (priceRange) => {
    this.setState({ filters: { priceRange } }, this.fetchData);
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
      <div>
        <ProductFilters filters={this.state.filters}
                        onChange={this.changePriceRangeFilter} />
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
      </div>
    );
  }
};

export default ProductsList;

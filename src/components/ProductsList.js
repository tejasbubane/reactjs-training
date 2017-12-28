import React, { Component } from "react";
import {fetch} from "services/fetcher"

const renderProducts = (products) => {
  return products.map((product, index) => {
    return(
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  })
}

const ProductsList = ({products}) => {
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
        {renderProducts(products)}
      </tbody>
    </table>
  );
}

export default ProductsList;

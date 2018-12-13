import React, { Component } from "react";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

const ProductFilters = ({ filters, onChange }) => (
  <div className="row" style={{marginBottom: "50px"}}>
    <form className="col-md-4 offset-md-2">
      <section className="row">
        <label htmlFor="price" className="col-md-3 float-right">Price</label>
        <span id="price" className="col-md-9">
          <InputRange minValue={0} maxValue={200000} step={5000}
                      value={filters.priceRange} onChange={onChange} />
        </span>
      </section>
    </form>
  </div>
)

export default ProductFilters;

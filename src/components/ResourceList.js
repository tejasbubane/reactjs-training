import React, { Component } from "react";
import {fetch} from "services/fetcher"

import UsersList from "./UsersList"
import ProductsList from "./ProductsList"

class ResourceList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: [],
      resourceType: "users"
    }
  }

  updateResourceList(resources) {
    this.setState({resources})
  }

  fetchResources() {
    fetch(this.state.resourceType, this.updateResourceList.bind(this))
  }
  
  componentDidMount() {
    this.fetchResources();
  }

  updateResourceType(resourceType) {
    this.setState({resourceType}, this.fetchResources.bind(this))
  }
  
  renderList() {
    switch(this.state.resourceType) {
      case "users":
        return <UsersList users={this.state.resources} />
      case "products":
        return <ProductsList products={this.state.resources} />
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li><a href="#" onClick={() => this.updateResourceType("users")}>Users</a></li>
          <li><a href="#" onClick={() => this.updateResourceType("products")}>Products</a></li>
        </ul>
        
        {this.renderList()}
      </div>
    )
  }
}

export default ResourceList;

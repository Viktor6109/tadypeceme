import React, { Component } from "react";
import MenuItem from "./MenuItemView";
import Loader from "../../components/Loader";
import * as API from "../../services/api";

//  getMenuItemById

export default class MenuItemContainer extends Component {
  state = { item: [], id: item.id };

  componentDidMount() {
    const item = API.getMenuItemById(id);
    this.setState({ item });
    console.log(item);
  }
  render() {
    const { item } = this.state;

    return (
      <div>
        <MenuItem id={item} />
      </div>
    );
  }
}

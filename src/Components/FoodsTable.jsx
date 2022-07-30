import React, { Component } from "react";
import Table from '../common/Table.jsx';
import Favorite from "../common/Favorite";

class FoodsTable extends Component {
  columns = [
    { label: "Name", path: "name" },
    { label: "Category", path: "category.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Price", path: "price" },
    {
      key: "favorite",
      content: (data) => (<Favorite onFavorite={() => this.props.onFavor(data)} isFavorite={data.isFavorite}/>),
    },
    {
      key: "Delete",
      content: (data) => ( <button onClick={() => this.props.onDelete(data)}className="btn btn-danger">Delete</button>),
    },
];
  render() {
    const { foods, sortColumn, onSort } = this.props;
    return (
<Table
datas = {foods}
sortColumn = {sortColumn}
onSort = {onSort}
columns = {this.columns}
/>
    );
  }
}
export default FoodsTable;

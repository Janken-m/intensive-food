import React, { Component } from "react";
import Table from "../common/Table.jsx";
import Favorite from "../common/Favorite";
import { Link } from "react-router-dom";

class FoodsTable extends Component {
  columns = [
    {
      label: "Name",
      path: "name",
      content: (data) => (
        <Link to={`/intensive-food/${data._id}`}> {data.name} </Link>
      ),
    },
    { label: "Category", path: "category.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Price", path: "price" },
    {
      key: "favorite",
      content: (data) => (
        <Favorite
          onFavorite={() => this.props.onFavor(data)}
          isFavorite={data.isFavorite}
        />
      ),
    },
    {
      key: "delete",
      content: (data) =>
        this.props.user ? (
          <button
            onClick={() => this.props.onDelete(data)}
            className="btn btn-danger"
          >
            Delete
          </button>
        ) : null,
    },
  ];
  render() {
    const { foods, sortColumn, onSort } = this.props;
    return (
      <Table
        datas={foods}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={this.columns}
      />
    );
  }
}
export default FoodsTable;

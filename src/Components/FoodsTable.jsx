import React, { Component } from "react";
import Table from "../common/Table.jsx";
import Favorite from "../common/Favorite";
import { Link } from "react-router-dom";
import auth from "../Service/authService";

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
  ];

  DeleteColumn = {
    key: "delete",
    content: (data) => (
      <button
        onClick={() => this.props.onDelete(data)}
        className="btn btn-danger"
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();

    const user = auth.getCurrentUser();

    if (user?.isAdmin) this.columns.push(this.DeleteColumn);
  }

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

import React, { Component } from "react";
import _ from "lodash";
import { getFoods } from "../Service/fakeFoodService";
import { getCategories } from "../Service/fakeCategoryService";
import Pagination from "../common/Pagination";
import ListGroup from "../common/ListGroup";
import { Paginate } from "../utils/paginate";
import FoodsTable from "./FoodsTable";
import { Link } from "react-router-dom";
import SearchBox from "../common/Input";

const DEFAULT_CATEGORY = { _id: "", name: "All Categories" }; //Fake database

class Foods extends Component {
  state = {
    foods: [],
    categories: [],
    pageSize: 4,
    currentPage: 1,
    currentCategory: DEFAULT_CATEGORY, //Fake database
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    const categories = [
      DEFAULT_CATEGORY, //Fake database
      ...getCategories(),
    ];
    this.setState({
      foods: getFoods(),
      categories,
    });
  }

  handleFavorite = (food) => {
    const foods = [...this.state.foods];
    const index = foods.indexOf(food);
    foods[index] = { ...food };
    foods[index].isFavorite = !foods[index].isFavorite;
    this.setState({ foods });
  };

  handlePageChange = (page) =>
    this.setState({ currentPage: page, currentCategory: 1 }); //Pagination

  handleCategorySelcted = (item) => this.setState({ currentCategory: item }); //Category

  handleSort = (sortColumn) => this.setState({ sortColumn }); //sortering /FoodsTable

  handleDelete = (food) => {
    const foods = this.state.foods.filter((f) => f._id !== food._id);
    this.setState({ foods, currentCategory: 1, currentPage: 1 });
  };

  handleSearch = ({ target: input }) => {
    const foodsSearch = this.state.foods.filter((f) =>
      f.name.toLowerCase().startsWith(input.value.toLowerCase())
    );
    this.setState({ foods: foodsSearch, currentCategory: 1, currentPage: 1 });
  };

  getPaginatedFoods() {
    const {
      pageSize,
      currentPage,
      sortColumn,
      currentCategory,
      foods: allFoods,
    } = this.state;

    const filteradFoods = currentCategory._id
      ? allFoods.filter((foods) => foods.category._id === currentCategory._id)
      : allFoods;

    const sortedFoods = _.orderBy(
      filteradFoods,
      [sortColumn.path],
      [sortColumn.order]
    );

    const foods = Paginate(sortedFoods, currentPage, pageSize);

    return { foods, filteradCount: filteradFoods.length };
  }

  render() {
    const {
      pageSize,
      currentPage,
      categories,
      sortColumn,
      currentCategory,
      foods: allFoods,
    } = this.state;
    const { length: count } = allFoods;

    if (count === 0)
      return (
        <h2>
          <center> Sorry! There is no foods in database. </center>
        </h2>
      );

    const { foods, filteradCount } = this.getPaginatedFoods();

    return (
      <div className="row mt-3">
        <div className="col-2">
          <ListGroup
            items={categories}
            selectedItem={currentCategory}
            onItemSelcted={this.handleCategorySelcted}
          />
        </div>
        <div className="col">
          <Link to="/intensive-food/new" className="btn btn-primary ms-2 mb-3">
            New Food
          </Link>
          <p>Showing {filteradCount} foods in the database </p>

          <SearchBox
            placeholder="Search"
            value={foods.name}
            name="name"
            onChange={this.handleSearch}
          />

          <FoodsTable
            foods={foods}
            onFavor={this.handleFavorite}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemCount={filteradCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Foods;

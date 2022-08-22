import React, { Component } from "react";
import _ from "lodash";
import { deleteFood, getFoods } from "../Service/FoodService";
import { getCategories } from "../Service/CategoryService";
import Pagination from "../common/Pagination";
import ListGroup from "../common/ListGroup";
import { Paginate } from "../utils/paginate";
import FoodsTable from "./FoodsTable";
import { Link } from "react-router-dom";
import SearchBox from "../common/SearchBox";

const DEFAULT_CATEGORY = { _id: "", name: "All Categories" }; //Fake database

class Foods extends Component {
  state = {
    foods: [],
    categories: [],
    pageSize: 4,
    currentPage: 1,
    SearchQuery: "",
    currentCategory: DEFAULT_CATEGORY, //Fake database
    sortColumn: { path: "name", order: "asc" },
  };

  async componentDidMount() {
    const allCategories = await getCategories();
    const categories = [
      DEFAULT_CATEGORY, //Fake database
      ...allCategories,
    ];
    const foods = await getFoods();
    this.setState({
      foods,
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

  handleCategorySelcted = (item) =>
    this.setState({ currentCategory: item, SearchQuery: "" }); //Category + noll ställer Search när vi bytar category

  handleSort = (sortColumn) => this.setState({ sortColumn }); //sortering /FoodsTable

  handleDelete = async (food) => {
    const foods = this.state.foods.filter((f) => f._id !== food._id);
    this.setState({ foods, currentCategory: 1, currentPage: 1 });
    deleteFood(food._id);
  };

  handleSearch = (SearchQuery) => {
    this.setState({ SearchQuery, currentCategory: DEFAULT_CATEGORY }); //noll ställer category när vi söker
  };

  getPaginatedFoods() {
    const {
      pageSize,
      currentPage,
      sortColumn,
      SearchQuery,
      currentCategory,
      foods: allFoods,
    } = this.state;

    let filteradFoods = allFoods;

    if (currentCategory._id) {
      filteradFoods = allFoods.filter(
        (foods) => foods.category._id === currentCategory._id
      );
    } else if (SearchQuery) {
      filteradFoods = allFoods.filter((food) =>
        food.name.toLowerCase().includes(SearchQuery.toLowerCase())
      );
    }

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
      SearchQuery,
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
            placeholder="Search.."
            value={SearchQuery}
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

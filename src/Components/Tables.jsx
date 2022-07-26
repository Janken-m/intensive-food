import React, { Component } from "react";
import { getFoods } from "../Service/fakeFoodService";
import { getCategories } from "../Service/fakeCategoryService";
import Favorite from "../common/Favorite";
import Pagination from "../common/Pagination";
import ListGroup from '../common/ListGroup';

const DEFAULT_CATEGORY = {_id: "", name: "All Categories"}; //Fake database

class Tables extends Component {
  state = {
    foods: [],
    pageSize: 4,
    currentPage: 1,
    currentCategory : DEFAULT_CATEGORY //Fake database
  };

  componentDidMount(){

    const categories = [
        DEFAULT_CATEGORY, //Fake database
        ...getCategories()
    ]
    this.setState({
        foods: getFoods(),
        categories
    });
  }


  handleFavorite = (food) => {
    const foods = [...this.state.foods];
    const index = foods.indexOf(food);
    foods[index] = { ...food };
    foods[index].isFavorite = !foods[index].isFavorite;
    this.setState({ foods });
  };

  handleDelete(id) {
    const foods = this.state.foods.filter((food) => food._id !== id);
    this.setState({ foods });
  }

  handlePageChange = (page) => {  //Pagination 
  this.setState({ currentPage: page });
  }

  handleCategorySelcted = (item) => { //Category
  this.setState({ currentCategory : item});
  }

  render() {
    const {length : count} = this.state.foods;
    const {foods, pageSize, currentPage, categories, currentCategory} = this.state;
    if (foods.length === 0)
      return (
        <h2>
          <center> Sorry! There is no foods in database. </center>
        </h2>
      );
    return (
      <div className="row mt-3">
        <div className="col-2">
         <ListGroup
         items = {categories}
         selectedItem = {currentCategory}
         onItemSelcted = {this.handleCategorySelcted}
         />
        </div>
        <div className="col">
          <p>Showing {count} foods in the database </p>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th> Favorite </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food) => (
                <tr key={food._id}>
                  <td> {food.name} </td>
                  <td> {food.category.name}</td>
                  <td> {food.numberInStock}</td>
                  <td> {food.price}</td>
                  <td>
                    <Favorite
                      onFavorite={() => this.handleFavorite(food)}
                      isFavorite={food.isFavorite}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(food._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
          itemCount = {count}
          pageSize = {pageSize}
          currentPage = {currentPage}
          onPageChange = {this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Tables;

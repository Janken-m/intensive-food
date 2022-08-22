import React from "react";
import Joi from "joi";
import Form from "../common/Form";
import { getFood, saveFood } from "../Service/FoodService";
import http from "../Service/httpService";
import config from "../config.json";

class FoodForm extends Form {
  state = {
    data: {
      _id: "",
      name: "",
      categoryId: "",
      numberInStock: "",
      price: "",
    },
    errors: {},
    categories: [],
  };

  schema = Joi.object({
    _id: Joi.string().allow(""),
    name: Joi.string().required().min(2).label("Name"),
    categoryId: Joi.required().allow("").label("Caregory"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    price: Joi.number().required().min(0).max(10).label("price"),
  });

  async componentDidMount() {
    this.populateCategories();

    this.populateFoods();
  }

  async populateCategories() {
    const { data: categories } = await http.get(config.apiCategory);
    this.setState({ categories });
  }

  async populateFoods() {
    // känna till id av food den man klickar på!
    const foodId = this.props.match.params.id;
    if (foodId === "new") return;

    const food = await getFood(foodId);
    if (!food) return this.props.history.replace("/not-found");

    this.setState({ data: this.maptoViewModel(food) });
  }
  maptoViewModel(food) {
    //mapning till vår form
    return {
      _id: food._id,
      name: food.name,
      categoryId: food.category._id,
      numberInStock: food.numberInStock,
      price: food.price,
    };
  }

  doSubmit = () => {
    saveFood(this.state.data); //function from foodInDb
    this.props.history.push("/intensive-food");
    console.log("Saved");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderDrowpdown(
          "categoryId",
          "Category",
          this.state.categories,
          "Select..."
        )}
        {this.renderInput("numberInStock", "Number in stock")}
        {this.renderInput("price", "Price")}
        {this.renderButton("Save")}
      </form>
    );
  }
}

export default FoodForm;

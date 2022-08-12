import Joi from 'joi';
import React from 'react';
import Form from '../common/Form';
import { getCategories } from '../Service/fakeCategoryService';
import DropDown from '../common/DropDown';
import { getFoods } from "../Service/fakeFoodService";

class NewFood extends Form {
    state = {
 data : {
    name: "",
     numberInStock :"",
     price: "",
    },
     errors : {},
     category:[],
     foods : []
    }

    componentDidMount () {
        const categories = {...getCategories()}
      this.setState({foods: getFoods(), category : categories});
    }

    schema = Joi.object({
        name: Joi.string().min(2).label("Name"),
        category : Joi.any().label("category"),
        numberInStock: Joi.number().greater(0).label("Number In Stock"),
        price: Joi.number().greater(0).label("price")
    })

   onSubmit = (food) => {
    const foods = [{food},...this.state.foods] // måste fixa 
    this.setState({foods});
   }


    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                    <h1 className='ms-2 mb-3'>
                        Food Form
                    </h1>
                    {this.renderInput("name", "Name")}
                    <DropDown
                    label = "Category"
                    name="category"
                    />
                    {this.renderInput("numberInStock", "Number in stock")}
                    {this.renderInput("price", "Price")}
                    {this.renderButton("Save")}
            </form>
        );
    }
}

export default NewFood;
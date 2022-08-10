import Joi from 'joi';
import React from 'react';
import Form from '../common/Form';
import { getCategories } from '../Service/fakeCategoryService';

class NewFood extends Form {
    state = {
 data : {
    name: "",
     category:"",
     numberInStock :"",
     price: "",
    },
     errors : {}
    }

    componentDidMount () {
      this.setState({ category : getCategories()});
    }

    schema = Joi.object({
        name: Joi.string().min(2).label("Name"),
        category : Joi.any().label("category"),
        numberInStock: Joi.number().greater(0).label("Number In Stock"),
        price: Joi.number().greater(0).label("price")
    })

   onSubmit = () => {

   }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                    <h1 className='ms-2 mb-3'>
                        Food Form
                    </h1>
                    {this.renderInput("name", "Name")}
                    {/* {this.state.data.category.map((c) => (
                        <ul key={c._id} className="dropdown-menu">
                        <li>
                            <button className='dropdown-item'> {c.name} </button>
                        </li>
                        </ul>
                    ))} */}
                    {this.renderInput("category", "Category")} 
                    {this.renderInput("numberInStock", "Number in stock")}
                    {this.renderInput("price", "Price")}
                    {this.renderButton("Save")}
            </form>
        );
    }
}

export default NewFood;
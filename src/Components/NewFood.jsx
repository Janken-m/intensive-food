import React, { Component } from 'react';
import Input from '../common/Input';

class NewFood extends Component {
    render() {
        return (
            <div>
                <h1 className='ms-2 mb-3'>
                    Food Form
                </h1>
                <Input
                name="name"
                label="Name"
                />
                <Input
                name="category"
                label="Category"
                />
                <Input
                name="numberInStock"
                label="Number in stock"
                />
                <Input
                name="price"
                label="Price"
                />
                <button className="btn btn-primary ms-3"> Save </button>
            </div>
        );
    }
}

export default NewFood;
import React, { Component } from 'react';
import { getFoods } from '../Service/fakeFoodService';

class Tables extends Component {
    state = {
        foods: getFoods(),
    }

    handleDelete(id){
        const foods =  this.state.foods.filter((food)=> food._id !== id);
        this.setState({foods});
    }

    render() {
        if(this.state.foods.length === 0) return <h2> <center> Sorry! There is no foods in database. </center> </h2>
        return (
            <div>
                <h5 className='mt-4 mb-4'> <center> Showing {this.state.foods.length} foods in the database </center> </h5>
                <table className="table table-striped table-bordered">
                    <thead className='table-dark'>
                        <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.foods.map((food)=> (
                        <tr key={food._id}>
                            <td> {food.name} </td>
                            <td> {food.category.name}</td>
                            <td> {food.numberInStock}</td>
                            <td> {food.price}</td>
                            <td>
                            <button className="btn btn-danger" onClick={()=> this.handleDelete(food._id)}> Delete </button>
                            </td>
                        </tr> ))} 

                       
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tables;
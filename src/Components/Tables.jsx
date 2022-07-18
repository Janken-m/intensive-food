import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.css";
import { getFoods } from '../Service/fakeFoodService';
import Pagination from './Pagination';
import Favorite from './Favorite';

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
                        <th className="ms-4 ps-4"> Favorite </th>
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
                                 <Favorite/>
                            </td>
                            <td>
                            <button className="btn btn-danger" onClick={()=> this.handleDelete(food._id)}> Delete </button>
                            </td>
                        </tr> ))} 
                    </tbody>
                </table>
                <Pagination/>
            </div>
        );
    }
}

export default Tables;
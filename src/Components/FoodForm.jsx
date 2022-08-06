import React, { Component } from 'react';

class FoodForm extends Component {
    handleSave = () => {
        this.props.history.push("/intensive-food")
    }
    render() {
        return (
            <div className='container'>
            <h1>
                Food Form {this.props.match.params.id}
            </h1>
            <button onClick={this.handleSave} className="btn btn-primary">
                Save
            </button>
            </div>
        );
    }
}

export default FoodForm;
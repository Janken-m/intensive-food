import React, { Component } from 'react';

class ListGroup extends Component {
    state = {
        active : false,
    }


    handleActive = () => {
        let active = this.state.active;
        active = !active;
        this.setState({ active });
      };

    handleBgActive() {
        let classes = "list-group-item ";
        classes += this.state.active ? "active" : "";
        return classes;
      }

    render() {
        return (
        <div className="row col-2 ms-2 mt-4">  
        {this.props.categorys.map((category)=> (
            <div key={category._id} className="list-group">
            <button className={this.handleBgActive()} style={{color: "black"}} onClick={this.handleActive}> {category.name} </button>
        </div>
        ))}
    </div>
        );
    }
}

export default ListGroup;
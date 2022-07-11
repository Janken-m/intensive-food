import React, { Component } from 'react';

class ListGroup extends Component {

    render() {
        return (
        <div className="row col-2 ms-2 mt-4">  
        {this.props.categorys.map((C)=> (
            <div key={C._id} className="list-group">
            <button className="page-link" style={{color: "black"}}> {C.name} </button>
        </div>
        ))}
    </div>
        );
    }
}

export default ListGroup;
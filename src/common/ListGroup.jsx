import React from 'react';

function ListGroup({items, selectedItem, onItemSelcted}) {
    return (
            <ul className="list-group">
                {items.map((item) => (
             <li
             key={item._id}
             style={{cursor: "pointer"}}
             className={item === selectedItem ? "list-group-item active" : "list-group-item"}
             onClick={()=> onItemSelcted(item)}
             >
                {item.name}
             </li>
                ))}
            </ul>
    );
}

export default ListGroup;
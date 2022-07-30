import React, { Component } from "react";

class TableHeader extends Component {
  rasierSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      //toggling
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn); //rasier event till "handleSort" !send the sortCoulumn to handler!
  };

  renderSortIcon (column) {
    const {sortColumn} = this.props
   if (sortColumn.path !== column.path) return null;

   if (sortColumn.order === "asc") 
   return <i className="fa-solid fa-sort-down"/>

   return <i className="fa-solid fa-sort-up"/>
  }

  render() {
    const { columns } = this.props; //props som vi tar från foodsTable
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.path || column.key} style={{cursor: "pointer"}} onClick={() => this.rasierSort(column.path)}> {column.label} {this.renderSortIcon(column)} </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

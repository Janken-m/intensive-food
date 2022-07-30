import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table({datas , columns, sortColumn, onSort}) {
    return (
        <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody datas={datas} columns={columns} />
      </table>
    );
}

export default Table;
import React, { Component } from 'react';
import _ from 'lodash'

class TableBody extends Component {
    renderCell = (data, column) => {
        if (column.content) return column.content(data);
    return _.get(data , column.path);
    } 
    
    render() {
        const { columns, datas} = this.props
        
        return (
            <tbody>
            {datas.map((data) => (  //vi behöver två loop för att datas "foods" en arry och cloumns är en annan array
                <tr key={data._id}>
                  {columns.map((column) => (
                    <td key={column.path || column.key}> 
                    {this.renderCell(data, column)}
                     </td>
                     
                  ))}
                </tr>
              )
            )}
          </tbody>
        );
    }
}

export default TableBody;

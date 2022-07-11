import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        return (
            <div>
                <nav>
                    <li className='pagination'>
                        <button className='page-link' style={{color: "black"}}> Previous</button>
                        <button className='page-link'>1</button>
                        <button className='page-link'>2</button>
                        <button className='page-link'>3</button>
                        <button className='page-link' style={{color: "black"}}> Next</button>
                    </li>
                </nav>
            </div>
        );
    }
}

export default Pagination;
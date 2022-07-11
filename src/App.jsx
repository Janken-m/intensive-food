import React, { Component } from "react";
import Tables from "./Components/Tables";
import ListGroup from "./Components/ListGroup";
import { getCategories } from "./Service/fakeCategoryService";

class App extends Component {
  state = {
    Category: getCategories(),
}
    render() {
        return (
          <div>
          <ListGroup categorys={this.state.Category} />
           <div className="container">
            <Tables/> 
              </div>
          </div>
        )}
}

export default App;

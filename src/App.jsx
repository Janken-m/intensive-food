import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Foods from "./Components/Foods";
import NavBar from "./Components/NavBar";
import Customers from "./Components/Customers";
import Orders from "./Components/Orders";
import TableBody from "./common/TableBody";
import NotFound from "./Components/NotFound";

class App extends Component {

  render() {
    return (
        <div>
          <NavBar />
            <Switch>
              <Route path= "/foods/?" component={TableBody}/>
              <Route path= "/customers" component={Customers}/>
              <Route path= "/orders" component={Orders}/>
              <Route path= "/notfound" component={NotFound}/>
              <Route exact path="/" component= {Foods}/>
              <Redirect to="/NOTFOUND"/>
            </Switch>
        </div>
    );
  }
}

export default App;

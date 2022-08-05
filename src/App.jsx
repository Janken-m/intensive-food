import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Foods from "./Components/Foods";
import NavBar from "./Components/NavBar";
import Customers from "./Components/Customers";
import Orders from "./Components/Orders";
import NotFound from "./Components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/orders" component={Orders} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/intensive-food" component={Foods} />
          <Route exact path="/" component={Foods} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;

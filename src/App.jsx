import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Foods from "./Components/Foods";
import NavBar from "./Components/NavBar";
import Customers from "./Components/Customers";
import Orders from "./Components/Orders";
import NotFound from "./Components/NotFound";
import FoodForm from "./Components/FoodForm";
import LoginForm from "./Components/LoginForm";
import Register from "./Components/Register";
import NewFood from "./Components/NewFood";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/intensive-food/new" component={NewFood} />
          <Route path="/intensive-food/:id" component={FoodForm} />
          <Route path= "/login" component={LoginForm} />
          <Route path = "/register" component={Register} />
          <Route path="/customers" component={Customers} />
          <Route path="/orders" component={Orders} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/intensive-food" component={Foods} />
          <Route exact path="/" component={Foods} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Foods from "./Components/Foods";
import NavBar from "./Components/NavBar";
import Customers from "./Components/Customers";
import Orders from "./Components/Orders";
import NotFound from "./Components/NotFound";
import FoodForm from "./Components/FoodForm";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/intensive-food/:id" component={FoodForm} />
          <Route path="/intensive-food/new" component={FoodForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
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

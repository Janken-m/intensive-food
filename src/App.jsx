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
import Logout from "./Components/Logout";
import auth from "./Service/authService";
import ProtectedRoute from "./common/ProtectedRoute";

class App extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    this.setState({ user: auth.getCurrentUser() });
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <ToastContainer />
        <NavBar user={user} />
        <Switch>
          <ProtectedRoute path="/intensive-food/:id" component={FoodForm} />
          <Route
            path="/intensive-food"
            render={(props) => <Foods {...props} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" render={(props) => <Foods {...props} />} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;

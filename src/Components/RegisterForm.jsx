import React from "react";
import Form from "../common/Form";
import Joi from "joi";
import user from "../Service/userService";

class RegisterForm extends Form {
  state = {
    data: { username: "", name: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"),
    name: Joi.string().min(2).label("Name"),
    password: Joi.string().required().min(5).label("Password"),
  });

  doSubmit = async () => {
    await user.register(this.state.data);

    this.props.history.replace("/intensive-food");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col">
          <h1 className="ms-2 p-2">Register</h1>
          {this.renderInput("username", "Username")}
          {this.renderInput("name", "Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </div>
      </form>
    );
  }
}

export default RegisterForm;

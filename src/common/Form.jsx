import { Component } from "react";
import Input from "./Input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
    foods: [],
  };

  validate() {
    // HandleSubmit
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);

    if (!error) return null;

    const errors = {};
    for (const detail of error.details)
      errors[detail.context.key] = detail.message;
    return errors;
  }

  validateProperty({ name, value }) {
    // handleChange
    const subSchema = this.schema.extract(name);
    const { error } = subSchema.validate(value);

    if (!error) return null;
    return error.message; //Joi msg
  }

  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.id] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    const { input } = e.target;

    const NewFood = {
      name: input.name,
      category: input.category,
      numberInStock: input.numberInStock,
      price: input.price,
    };
    const foods = [NewFood, ...this.state.foods]; // måste fixa
    this.setState({ foods });

    this.doSubmit();
  };

  renderButton(label) {
    return (
      <button className="btn btn-primary ms-2" disabled={this.validate()}>
        {label}
      </button>
    );
  }

  renderInput(name, label) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;

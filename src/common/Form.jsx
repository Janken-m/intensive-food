import { Component } from "react";
import DropDown from "./DropDown";
import Input from "./Input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
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
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderButton(label) {
    return (
      <button
        className="btn btn-primary ms-2"
        onClick={() => this.doSubmit}
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type, placeholder = "") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        placeholder={placeholder}
        type={type}
      />
    );
  }

  renderDrowpdown(name, label, options, placeholder = "") {
    const { data, errors } = this.state;
    return (
      <DropDown
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        options={options}
        placeholder={placeholder}
      />
    );
  }
}

export default Form;

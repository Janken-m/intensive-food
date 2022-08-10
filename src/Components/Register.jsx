import React from 'react';
import Form from '../common/Form';
import Joi from 'joi';


class Register extends Form {
    state = {
        data:{ email: "",name: "",password:""},
        errors:{},
    }

    schema = Joi.object({
        email: Joi.string().email({tlds: {allow: false}}).label("Username"),
        name: Joi.string().required().min(2).label("Name"),
        password: Joi.string().required().min(5).label("Password")
    })

    doSubmit = () => {
        console.log("LOGGEDIN")
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='col'>
                    <h1 className='ms-2 p-2'>
                        Register
                    </h1>
                    {this.renderInput("email", "Username")}
                    {this.renderInput("name", "Name")}
                    {this.renderInput("password", "Password")}
                    {this.renderButton("Register")}
                </div>
            </form>
        );
    }
}

export default Register;
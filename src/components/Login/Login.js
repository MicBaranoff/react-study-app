import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'login'} component={'input'} name={'login'} type="text"/></div>
            <div><Field placeholder={'password'} component={'input'} name={'password'} type="text"/></div>
            <div><label htmlFor="">
                <Field component={'input'} type={'checkbox'} name={'remember'}/>
                remember me
            </label></div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default login;
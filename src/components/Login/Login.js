import React from "react";
import {Field, reduxForm} from "redux-form";
import {loginToProfile} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'login'} component={'input'} name={'login'} type="text"/></div>
            <div><Field placeholder={'password'} component={'input'} name={'password'} type="text"/></div>
            <div><label htmlFor="">
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>
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

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    onSubmit = (formData) => {
        console.log(formData, this.props);
        this.props.loginToProfile({
            email: formData.login,
            password: formData.password,
            rememberMe: formData.rememberMe,
        }).then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <ReduxLoginForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default Login;
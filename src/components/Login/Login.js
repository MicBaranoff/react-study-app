import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {emailValidation, maxLengthCreator, minLengthCreator, requiredFiled} from "../../utils/validators";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                placeholder={'login'}
                component={Input}
                validate={[
                    requiredFiled,
                    maxLengthCreator(30),
                    minLengthCreator(6),
                    emailValidation
                ]}
                name={'login'}
                type="text"/>
            </div>
            <div>
                <Field
                    placeholder={'password'}
                    component={Input}
                    name={'password'}
                    validate={[
                        requiredFiled,
                        maxLengthCreator(30),
                        minLengthCreator(6)
                    ]}
                    type="text"/>
            </div>
            {
               props.error && <div className={'text--error'}>{props.error}</div>
            }
            <div>
                <label htmlFor="">
                    <Field
                        component={'input'}
                        type={'checkbox'}
                        name={'rememberMe'}/>
                    remember me
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);


class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    onSubmit = (formData) => {
        this.props.loginToProfile({
            email: formData.login,
            password: formData.password,
            rememberMe: formData.rememberMe,
        })
    }

    render() {
        if (this.props.isAuth) return <Navigate to={'/profile'}/>
        return (
            <div>
                <h1>LOGIN</h1>
                <ReduxLoginForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default Login;
import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import API from '../Forum/utils/API';
const SignupSchema = Yup.object().shape({

    surname: Yup.string()
        .required(" Поле обов'язкове!")
        .matches("^[А-Яа-яёЁЇїІіЄєҐґ]+$","Українською, будь ласка))"),
    password: Yup.string().required(" Поле обов'язкове!")
        .min(3, "Пароль не менше 3 знаків!")
        .max(15, "Пароль не більше 15 знаків!")

});

class LoginFormik extends Component {
    constructor(props) {
        super(props);

        this.state = {
            successful: false,
            alert: null,
            loading: false,
        };
    }

    submitForm = (values) =>{

        return API.post("/users/authchek/" ,values)
            .then(
                response => {
                    if (response.data.accessToken) {

                        localStorage.setItem("userInfo", JSON.stringify(response.data));
                        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
                       // swal("Вітаємо на сайті", response.data.message,"success")
                        console.log(userInfo);
                        this.props.changeUserState();
                        this.setState({
                            loading: false
                        });
                        this.props.changeUserState();
                    }
                    console.log(response.data)
                    return response.data;
                },
                error => {
                    swal("Error!",error.response.data.message, "error");
                    this.setState({
                        loading: false
                    })

                }
                        )
    .then(
        ()=> window.location.reload())
    }
    showForm = ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting
                }) => {
        return (
            <form onSubmit={handleSubmit}>
                <h1 className="text-center cert ">УВІЙТИ</h1>
                {!this.state.successful && (
                    <div className="row">

                        <div className=" col-md-4 form-group has-feedback">
                            <label htmlFor="text"><h4>Прізвище:</h4></label>
                            <input
                                type="text"
                                name="surname"
                                className="form-control"
                                onChange={handleChange}
                                value={values.surname}
                                className={
                                    errors.surname && touched.surname
                                        ? "form-control is-invalid"
                                        : "form-control "
                                }
                                placeholder="Прізвище(українською)"
                            />
                            {errors.surname && touched.surname ? (
                                <big id="passwordHelp" className="text-danger">
                                    {errors.surname}
                                </big>
                            ) : null}
                        </div>
                        <div className=" col-md-4 form-group has-feedback">
                            <label htmlFor="number"><h4>Пароль:</h4></label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                                className="form-control"
                                placeholder="Пароль"
                                className={
                                    errors.password && touched.password
                                        ? "form-control is-invalid"
                                        : "form-control valid"
                                }
                            />
                            {errors.password && touched.password ? (
                                <big id="passwordHelp" class="text-danger">
                                    {errors.password}
                                </big>
                            ) : null}
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="btn btn-primary btn-block btn-flat"
                                >Увійти<i className="fa fa-sign-in"/>
                                </button>

                            </div>

                        </div>
                    </div>
                )}
            </form>
        );
    };
    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
        };
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="card card-container"
                     style={{
                         paddingLeft:'1rem',
                         width:'100%',
                         height:'auto'
                     }}>
                    <Formik
                        initialValues={{
                            name: "",
                            surname: "",
                            password: ""
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            this.submitForm(values, this.props.toggleToSignIn );
                            setSubmitting(false);
                        }}
                        validationSchema={SignupSchema}
                    >

                        {props => this.showForm(props)}
                    </Formik>

                </div>

            </div>
        );
    }
}

export default LoginFormik;

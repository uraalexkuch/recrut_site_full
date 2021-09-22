import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import swal from "sweetalert";
import API from '../Forum/utils/API';
const SignupSchema = Yup.object().shape({
   name: Yup.string()
       .required(" Поле обов'язкове!")
     .matches("^[А-Яа-яёЁЇїІіЄєҐґ]+$","Українською, будь ласка))"),

    surname: Yup.string()
        .required(" Поле обов'язкове!")
    .matches("^[А-Яа-яёЁЇїІіЄєҐґ]+$","Українською, будь ласка))"),
    center:Yup.number()
        .required(" Поле обов'язкове!")
        .min(500,'Введіть код центру Донецької області')
    .max(600,'Введіть код центру Донецької області'),

    password: Yup.string().required(" Поле обов'язкове!"),

});

class RegisterFormik extends Component {
    constructor(props) {
        super(props);

        this.state = {
            successful: false,
            alert: null
        };
    }

    submitForm = (values) =>{
        let { toggleToSignIn } = this.props;


        return API.post("/users/auth/" ,values)
            .then(
                response => {
                    if (response.data) {
                        swal("Успіх!", response.data.message, "success")
                               let signUpObj =  (values) ;
                        localStorage.setItem("userInfo", JSON.stringify({values}));
                          console.log(signUpObj, "****")
                        this.setState({
                             successful: true
                        })
                        toggleToSignIn(false);
                      }
                },
                error => {
                    swal("Error!",error.response.data.message, "error");
                    this.setState({
                        successful: false
                    })

                }

            );
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
                <h1 className="text-center cert ">РЕЄСТРАЦІЯ</h1>
                {!this.state.successful && (
                <div className="row">
                <div className=" col-md-4 form-group has-feedback">
                    <label htmlFor="text"><h4>Ім'я:</h4></label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={handleChange}
                        value={values.name}
                        placeholder="Ім'я (українською)"
                        className={
                            errors.name && touched.name
                                ? "form-control is-invalid"
                                : "form-control "
                        }
                    />
                    {errors.name && touched.name ? (
                        <big id="passwordHelp" className="text-danger">
                            {errors.name}
                        </big>
                    ) : null}
                </div>
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
                        <label htmlFor="number"><h4>Код центру:</h4></label>
                        <input
                            type="text"
                            name="center"
                            className="form-control"
                            onChange={handleChange}
                            value={values.center}
                            className={
                                errors.center && touched.center
                                    ? "form-control is-invalid"
                                    : "form-control "
                            }
                            placeholder="Введіть код центру Донецької області"
                        />
                        {errors.center && touched.surname ? (
                            <big id="passwordHelp" className="text-danger">
                                {errors.center}
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
                        >
                             Зареєструватися <i className="fa fa-database"/>
                        </button>

                    </div>

                </div>
                </div>
                )}
            </form>
        );
    };

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
                                password: "",
                                avatar:""
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                this.submitForm(values, this.props.toggleToSignIn );
                                setSubmitting(false);
                            }}
                            validationSchema={SignupSchema}
                        >
                            {/* {this.showForm()}            */}
                            {props => this.showForm(props)}
                        </Formik>

                </div>

            </div>
        );
    }
}

export default RegisterFormik;

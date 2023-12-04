import { Formik,Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { signUpSchema } from "../schemas/signUpSchema";
import { useState } from "react";

const initialValuesInfo = {fullNameSignUp:"",emailSignUp:"",passwordSignUp:"",passwordSignUpConfirm:"",genreSignUp:"",termsSignUp:false}

const SignUp = () => {

  const[modal, setModal] = useState(false);
  
  const onSubmit = (values) => {
    console.log(values);
    setModal(true);
  }

  return (
    <main>
      { modal && (
        <div className="modal" >
          <div className="container__box">
            <fieldset className="container__fieldset modal__fieldset ">
              <legend> Successful registration! </legend>
              <p className="modal__text">Your registration was successful, you can now continue with filling out the form!</p>
              <div className="modal__btns">
                <Link to={"/firstform"} ><button className="modal__btn">Continue</button></Link>
                <button onClick={()=>setModal(false)} className="modal__btn">Exit</button>
              </div>
            </fieldset>
          </div>
        </div>
      )}

      <div className="container">
        <div className="container__box">
          <Formik initialValues={initialValuesInfo} onSubmit={onSubmit} validationSchema={signUpSchema} >
          <Form autoComplete="off">
            <fieldset className="container__fieldset">
              <legend>Sing Up</legend>
              <fieldset>
                <label htmlFor="fullNameSignUp" >Full name</label>
                <Field name="fullNameSignUp" id="fullNameSignUp" type="text" autoFocus/>
                <ErrorMessage name="fullNameSignUp" component="p" className="container__message-error" />
              </fieldset>
              <fieldset>
                <label htmlFor="emailSignUp" >Email</label>
                <Field name="emailSignUp" id="emailSignUp" type="email" />
                <ErrorMessage name="emailSignUp" component="p"  className="container__message-error" />
              </fieldset>
              <fieldset>
                <label htmlFor="passwordSignUp" >Password</label>
                <Field name="passwordSignUp" id="passwordSignUp" type="password" />
                <ErrorMessage name="passwordSignUp" component="p" className="container__message-error" />
              </fieldset>
              <fieldset>
                <label htmlFor="passwordSignUpConfirm" >Confirm password</label>
                <Field name="passwordSignUpConfirm" id="passwordSignUpConfirm" type="password" />
                <ErrorMessage name="passwordSignUpConfirm" component="p" className="container__message-error" />
              </fieldset>
              <fieldset>
                <label htmlFor="genreSignUp" >Movie genre</label>
                <Field name="genreSignUp" id="genreSignUp" as="select" >
                  <option  >Select an option</option>
                  <option > Drama</option>
                  <option > Horror</option>
                  <option > Action</option>
                  <option > Adventure</option>
                  <option > Family</option>
                </Field>
                <ErrorMessage name="genreSignUp" component="p" className="container__message-error" />
              </fieldset>
              <fieldset className="container__terms">
                <Field name="termsSignUp" type="checkbox" id="termsSignUp" />
                <label htmlFor="termsSignUp" >Agree to the terms</label>
                <ErrorMessage name="termsSignUp" component="p" className="container__message-error" />
              </fieldset>
              <button type="submit" > Register</button>
            </fieldset>
          </Form>
          </Formik>
          <p>Already have an account?
            <Link to={"/signin"} >
              <span> Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default SignUp
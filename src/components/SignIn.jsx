import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { signupSchema } from "../schemas/signInSchema";
import { useState } from "react";

const initialValuesInfo = { emailSignIn: "", passwordSignIn: "" };

const SignIn = () => {
  const [modal, setModal] = useState(false);

  const onSubmit = () => {
    setModal(true);
  };

  return (
    <main>
      {modal && (
        <div className="modal">
          <div className="container__box">
            <fieldset className="container__fieldset modal__fieldset ">
              <legend> Welcome back! </legend>
              <p className="modal__text">
                Your authentication was successful, you can now continue with
                filling out the form!
              </p>
              <div className="modal__btns">
                <Link to={"/React-form/firstform"}>
                  <button className="modal__btn">Continue</button>
                </Link>
                <button onClick={() => setModal(false)} className="modal__btn">
                  Exit
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      )}

      <div className="container">
        <div className="container__box">
          <Formik
            initialValues={initialValuesInfo}
            onSubmit={onSubmit}
            validationSchema={signupSchema}
          >
            <Form autoComplete="off">
              <fieldset className="container__fieldset">
                <legend>Sign In</legend>
                <fieldset>
                  <label htmlFor="emailSignIn">Email</label>
                  <Field name="emailSignIn" type="email" id="emailSignIn" />
                  <ErrorMessage
                    name="emailSignIn"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="passwordSignIn">Password</label>
                  <Field
                    name="passwordSignIn"
                    type="password"
                    id="passwordSignIn"
                    pattern="^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$"
                  />
                  <ErrorMessage
                    name="passwordSignIn"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <button type="submit">Login</button>

                <Link to={"/React-form/recoverpassword"}>
                  <span className="container__forgot">Forgot password?</span>
                </Link>
              </fieldset>
            </Form>
          </Formik>
          <p>
            Don&apos;t have an account?
            <Link to={"/React-form/signup"}>
              <span> Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignIn;

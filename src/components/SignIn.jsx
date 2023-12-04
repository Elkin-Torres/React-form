import { Formik,Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { signupSchema } from "../schemas/signInSchema";

const initialValuesInfo={emailSignIn:"",passwordSignIn:""}

const SignIn = () => {

  const onSubmit = (values) =>{
    console.log(values);
  }

  return (
    <main>
      <div className="container">
        <div className="container__box">
          <Formik initialValues={initialValuesInfo} onSubmit={onSubmit} validationSchema={signupSchema}>
          <Form autoComplete="off">
            <fieldset className="container__fieldset" >
              <legend>Sign In</legend>
              <fieldset>
              <label htmlFor="emailSignIn" >Email</label>
              <Field name="emailSignIn" type="email" id="emailSignIn" />
              <ErrorMessage name="emailSignIn" component="p" className="container__message-error" />
              </fieldset>
              <fieldset>
                <label htmlFor="passwordSignIn" >Password</label>
                <Field name="passwordSignIn" type="password" id="passwordSignIn" pattern="^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$"/>
                <ErrorMessage name="passwordSignIn" component="p" className="container__message-error" />
              </fieldset>
              <button type="submit" >Login</button>
              <Link to={"/recoverpassword"} >
                <span className="container__forgot">Forgot password?</span>
              </Link>
            </fieldset>
          </Form>
          </Formik>
          <p>Don&apos;t have an account?
            <Link to={"/signup"} ><span> Sign up</span></Link>
             </p>
        </div>
      </div>
    </main>
  )
}

export default SignIn
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { recoverPasswordSchema } from "../schemas/recoverPasswordSchema";

const initialValuesInfo = {emailRecover:""}


const RecoverPassword = () => {

  const onSubmit = (values) =>{
    console.log(values);
  }


  return (
    <main>
      <div className="container">
        <div className="container__box">
          <Formik onSubmit={onSubmit} validationSchema={recoverPasswordSchema} initialValues={initialValuesInfo}>
            <Form autoComplete="off">
              <fieldset className="container__fieldset">
                  <legend>Recover Password</legend>
                  <fieldset>
                  <label htmlFor="emailRecover" >Email</label>
                  <Field name="emailRecover" type="email" id="emailRecover" autoFocus /> 
                  <ErrorMessage name="emailRecover" component="p" className="container__message-error" />
                  </fieldset>
                  <button type="submit" > Send</button>
              </fieldset>
            </Form>
          </Formik>
          <p>Already have an account?
          <Link to={"/signin"} ><span> Sign in!</span></Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default RecoverPassword
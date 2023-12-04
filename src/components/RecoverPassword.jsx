import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { recoverPasswordSchema } from "../schemas/recoverPasswordSchema";
import { useState } from "react";

const initialValuesInfo = {emailRecover:""}


const RecoverPassword = () => {

  const[modal, setModal] = useState(false);

  const onSubmit = (values) =>{
    console.log(values);
    setModal(true);
  }


  return (
    <main>
      { modal && (
        <div className="modal" >
          <div className="container__box">
            <fieldset className="container__fieldset modal__fieldset ">
              <legend> Message sent </legend>
              <p className="modal__text">A message with the information to recover your password was sent to your email, please check it!</p>
              <div className="modal__btns">
                <Link to={"/"} ><button onClick={()=> setModal(false)} className="modal__btn">Accept</button></Link>
              </div>
            </fieldset>
          </div>
        </div>
      )}

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
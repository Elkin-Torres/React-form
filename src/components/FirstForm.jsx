import { ErrorMessage, Field, Form, Formik } from "formik";
import { firstForm } from "../schemas/firstForm";
import { Link } from "react-router-dom";
import { useState } from "react";

const initialValuesInfo = {namesFirstForm:"",surnamesFirstForm:"",documentFirstForm:"",genreFirstForm:"",ageFirstForm:""}

const FirstForm = () => {

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
              <legend> first part completed! </legend>
              <p className="modal__text">All the data has been compiled, continue with the next part.</p>
              <div className="modal__btns">
                <Link to={"/secondform"} ><button onClick={()=> setModal(false)} className="modal__btn">Continue</button></Link>
              </div>
            </fieldset>
          </div>
        </div>
      )}
      <div className="container container-absolute">
        <div className="container__box">
          <Formik initialValues={initialValuesInfo} onSubmit={onSubmit} validationSchema={firstForm}>
            <Form autoComplete="off" >
              <fieldset className="container__fieldset">
                <legend>Please fill out the information</legend>
                <fieldset>
                  <label htmlFor="namesFirstForm">Names</label>
                  <Field
                    name="namesFirstForm"
                    id="namesFirstForm"
                    type="text"
                    autoFocus
                  />
                  <ErrorMessage
                    name="namesFirstForm"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="surnamesFirstForm">Surnames</label>
                  <Field
                    name="surnamesFirstForm"
                    id="surnamesFirstForm"
                    type="text"
                  />
                  <ErrorMessage
                    name="surnamesFirstForm"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="documentFirstForm">document type</label>
                  <Field
                    name="documentFirstForm"
                    id="documentFirstForm"
                    as="select"
                  >
                    <option> Select an option</option>
                    <option> citizenship card</option>
                    <option> identity card</option>
                    <option> passport</option>
                  </Field>
                  <ErrorMessage
                    name="documentFirstForm"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="genreFirstForm">Genre</label>
                  <Field name="genreFirstForm" id="genreFirstForm" as="select">
                    <option> Select an option</option>
                    <option> Female</option>
                    <option> Male</option>
                    <option> Other</option>
                    <option> I prefer not to answer</option>
                  </Field>
                  <ErrorMessage
                    name="genreFirstForm"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="ageFirstForm">Age</label>
                  <Field name="ageFirstForm" id="ageFirstForm" type="text" />
                  <ErrorMessage
                    name="ageFirstForm"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>              
                <button type="submit"> Next</button> 
              </fieldset>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default FirstForm;

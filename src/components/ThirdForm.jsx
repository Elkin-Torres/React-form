import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { thirdForm } from "../schemas/thirdForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInfoThird } from "../features/thirdFormSlice";


const ThirdForm = () => {

  const dispatch = useDispatch();
  const {dataThirdForm} = useSelector((store)=> store.infoThirdForm);

  //control when the modal is displayed
  const [modal, setModal] = useState(false);

  const onSubmit = (values) => {
    setModal(true);

    //send the information to the store
    dispatch(addInfoThird(values))
  };

  return (
    <main>
      {modal && (
        <div className="modal">
          <div className="container__box">
            <fieldset className="container__fieldset modal__fieldset ">
              <legend> Completed form! </legend>
              <p className="modal__text">
                All the data has been filled out, the form was completed
                successfully!
              </p>
              <div className="modal__btns">
                <Link to={"/React-form/filledoutform"}>
                  <button
                    onClick={() => setModal(false)}
                    className="modal__btn"
                  >
                    Finish
                  </button>
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
      )}
      <div className="container container-absolute">
        <div className="container__box">
          <Formik
            initialValues={dataThirdForm || ''}
            onSubmit={onSubmit}
            validationSchema={thirdForm}
          >
            <Form autoComplete="off">
              <fieldset className="container__fieldset">
                <legend>Please fill out the information</legend>
                <fieldset>
                  <label htmlFor="movieThirdForm">
                    What&apos;s your favorite movie?
                  </label>
                  <Field
                    name="movieThirdForm"
                    id="movieThirdForm"
                    type="text"
                    autoFocus
                  />
                  <ErrorMessage
                    name="movieThirdForm"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="theaterThirdForm">
                    What was the last movie you saw in a theater?
                  </label>
                  <Field
                    name="theaterThirdForm"
                    id="theaterThirdForm"
                    type="text"
                  />
                  <ErrorMessage
                    name="theaterThirdForm"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="pageThirdForm">
                    How did you find out about our page?
                  </label>
                  <Field name="pageThirdForm" id="pageThirdForm" as="select">
                    <option> Select an option</option>
                    <option> TV</option>
                    <option> Social Media</option>
                    <option> Friend</option>
                    <option> Magazine</option>
                    <option> Other</option>
                  </Field>
                  <ErrorMessage
                    name="pageThirdForm"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="notificationThirdForm">
                    Would you like to receive notifications or recommendations?
                  </label>
                  <Field
                    name="notificationThirdForm"
                    id="notificationThirdForm"
                    as="select"
                  >
                    <option> Select an option</option>
                    <option> Yes</option>
                    <option> No</option>
                  </Field>
                  <ErrorMessage
                    name="notificationThirdForm"
                    component="p"
                    className="container__message-error"
                  />
                </fieldset>
                <div className="container__btns-form">
                  <Link to={"/React-form/secondform"}>
                    <button>Back</button>
                  </Link>
                  <button type="submit">Send</button>
                </div>
              </fieldset>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default ThirdForm;

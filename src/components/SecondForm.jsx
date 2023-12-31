import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { secondForm } from "../schemas/secondForm";
import { useDispatch, useSelector } from "react-redux";
import { addInfoSecond } from "../features/secondFormSlice";


const SecondForm = () => {

  const dispatch = useDispatch();
  const { dataSecondForm } = useSelector((store) => store.infoSecondForm);

  //control when the modal is displayed
  const[modal, setModal] = useState(false);

  const onSubmit = (values) =>{
      setModal(true);
      
      //send the information to the store
      dispatch(addInfoSecond(values))      
  }

return (
  <main>
    {modal && (
      <div className="modal">
        <div className="container__box">
          <fieldset className="container__fieldset modal__fieldset ">
            <legend> Second part completed! </legend>
            <p className="modal__text">
              All the data has been compiled, continue with the last part.
            </p>
            <div className="modal__btns">
              <Link to={"/React-form/thirdform"}>
                <button
                  onClick={() => setModal(false)}
                  className="modal__btn"
                >
                  Continue
                </button>
              </Link>
            </div>
          </fieldset>
        </div>
      </div>
    )}
    <div className="container container-absolute">
      <div className="container__box">
        <Formik validationSchema={secondForm} initialValues={dataSecondForm} onSubmit={onSubmit}  >
          <Form autoComplete="off">
            <fieldset className="container__fieldset">
              <legend>Please fill out the information</legend>
              <fieldset>
                <label htmlFor="genreSecondForm">
                  What genre of movies do you prefer?
                </label>
                <Field
                  name="genreSecondForm"
                  id="genreSecondForm"
                  as="select"
                >
                  <option> Select an option</option>
                  <option> Drama</option>
                  <option> Horror</option>
                  <option> Action</option>
                  <option> Adventure</option>
                  <option> Family</option>
                </Field>
                <ErrorMessage
                  name="genreSecondForm"
                  component="p"
                  className="container__message-error"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="deviceSecondForm">
                  What type of device do you watch movies on?
                </label>
                <Field
                  name="deviceSecondForm"
                  id="deviceSecondForm"
                  as="select"
                >
                  <option> Select an option</option>
                  <option> TV</option>
                  <option> Cell phone</option>
                  <option> Tablet</option>
                  <option> All the above</option>
                </Field>
                <ErrorMessage
                  name="deviceSecondForm"
                  component="p"
                  className="container__message-error"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="streamingSecondForm">
                  Do you pay for streaming content?
                </label>
                <Field
                  name="streamingSecondForm"
                  id="streamingSecondForm"
                  as="select"
                >
                  <option> Select an option</option>
                  <option> Yes</option>
                  <option> No</option>
                </Field>
                <ErrorMessage
                  name="streamingSecondForm"
                  component="p"
                  className="container__message-error"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="platformsSecondForm">
                  What platforms do you usually use? (Netflix, HBO...)
                </label>
                <Field
                  name="platformsSecondForm"
                  id="platformsSecondForm"
                  type="text"
                />
                <ErrorMessage
                  name="platformsSecondForm"
                  component="p"
                  className="container__message-error"
                />
              </fieldset>
              <div className="container__btns-form">
              <Link to={"/React-form/firstform"} ><button>Back</button></Link>
              <button type="submit">Next</button>
              </div>
            </fieldset>
          </Form>
        </Formik>
      </div>
    </div>
  </main>
);
};

export default SecondForm;

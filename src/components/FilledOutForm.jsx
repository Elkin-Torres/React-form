import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remInfo } from "../features/firstFormSlice";
import { remInfoSecond } from "../features/secondFormSlice";
import { remInfoThird } from "../features/thirdFormSlice";

const FilledOutForm = () => {
  //to prevent the user from having the option to go to the top of the page
  let changePosition = document.querySelector(".nav ");
  changePosition.style.display = "none";

  //control when the modal is displayed
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const { dataFirstForm } = useSelector((store) => store.infoFirstForm);
  const { dataSecondForm } = useSelector((store) => store.infoSecondForm);
  const { dataThirdForm } = useSelector((store) => store.infoThirdForm);

  function resetValues() {
    setModal(false);

    //delete store information
    dispatch(remInfo());
    dispatch(remInfoSecond());
    dispatch(remInfoThird());

    let nav = document.querySelector("nav");
    nav.style.display = "block";
  }

  function showModal() {
    //hide final form information
    let data = document.querySelector(".container");
    data.style.display = "none";

    setModal(true);
  }

  return (
    <main>
      {modal && (
        <div className="modal modal-filledout">
          <div className="container__box">
            <fieldset className="container__fieldset modal__fieldset ">
              <legend> the data was sent! </legend>
              <p className="modal__text">
                The information was sent successfully, thank you for filling out
                the form!
              </p>
              <div className="modal__btns">
                <Link to={"/React-form"}>
                  <button onClick={() => resetValues()} className="modal__btn">
                    Close
                  </button>
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
      )}
      <div className="container container-absolute container-change">
        <div className="container__box">
          <Formik>
            <Form>
              <fieldset className="container__fieldset">
                <legend>you have entered the following information</legend>
                {/* first part */}
                <fieldset>
                  <label>Names</label>
                  <span> {dataFirstForm.namesFirstForm} </span>
                </fieldset>
                <fieldset>
                  <label>Surnames</label>
                  <span> {dataFirstForm.surnamesFirstForm} </span>
                </fieldset>
                <fieldset>
                  <label>Document type</label>
                  <span> {dataFirstForm.documentFirstForm} </span>
                </fieldset>
                <fieldset>
                  <label>Genre</label>
                  <span> {dataFirstForm.genreFirstForm} </span>
                </fieldset>
                <fieldset>
                  <label>Age</label>
                  <span> {dataFirstForm.ageFirstForm} </span>
                </fieldset>
                {/* second part */}
                <fieldset>
                  <label>What genre of movies do you prefer?</label>
                  <span> {dataSecondForm.genreSecondForm} </span>
                </fieldset>
                <fieldset>
                  <label>What type of device do you watch movies on?</label>
                  <span> {dataSecondForm.deviceSecondForm} </span>
                </fieldset>
                <fieldset>
                  <label>Do you pay for streaming content?</label>
                  <span> {dataSecondForm.streamingSecondForm} </span>
                </fieldset>
                <fieldset>
                  <label>
                    What platforms do you usually use? (Netflix, HBO...)
                  </label>
                  <span> {dataSecondForm.platformsSecondForm} </span>
                </fieldset>
                {/* third part */}
                <fieldset>
                  <label>What&apos;s your favorite movie? </label>
                  <span> {dataThirdForm.movieThirdForm} </span>
                </fieldset>
                <fieldset>
                  <label>What was the last movie you saw in a theater? </label>
                  <span> {dataThirdForm.theaterThirdForm} </span>
                </fieldset>
                <fieldset>
                  <label>How did you find out about our page?</label>
                  <span> {dataThirdForm.pageThirdForm} </span>
                </fieldset>
                <fieldset>
                  <label>
                    Would you like to receive notifications or recommendations?{" "}
                  </label>
                  <span> {dataThirdForm.notificationThirdForm} </span>
                </fieldset>
                <div className="container__btns-form container__btns-filledOut">
                  <Link to={"/React-form/thirdform"}>
                    <button>Back</button>
                  </Link>
                  <button onClick={() => showModal()} type="submit">
                    Send
                  </button>
                </div>
              </fieldset>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default FilledOutForm;

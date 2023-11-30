import { Link } from "react-router-dom"


const SignUp = () => {
  return (
    <main>
      <div className="container">
        <div className="container__box">
          <form autoComplete="off">
            <fieldset className="container__fieldset">
              <legend>Sing Up</legend>
              <fieldset>
                <label htmlFor="fullNameSignUp" >Full name</label>
                <input type="text" id="fullNameSignUp" />
                <p className="container__error">Invalid name</p>
              </fieldset>
              <fieldset>
                <label htmlFor="emailSignUp" >Email</label>
                <input type="email" id="emailSignUp" />
                <p className="container__error">Invalid email</p>
              </fieldset>
              <fieldset>
                <label htmlFor="passwordSignUp" >Password</label>
                <input type="password" id="passwordSignUp" />
                <p className="container__error">Invalid password</p>
              </fieldset>
              <fieldset>
                <label htmlFor="passwordSignUpConfirm" >Confirm password</label>
                <input type="password" id="passwordSignUpConfirm" />
                <p className="container__error">Invalid password</p>
              </fieldset>
              <fieldset>
                <label htmlFor="genreSignUp" >Movie genre</label>
                <select id="genreSignUp" >
                  <option  >Select an option</option>
                  <option > Drama</option>
                  <option > Horror</option>
                  <option > Action</option>
                  <option > Adventure</option>
                  <option > Family</option>
                </select>
              </fieldset>
              <fieldset className="container__terms">
                <input type="checkbox" id="termsSignUp" /> 
                <label htmlFor="termsSignUp" >Agree to the terms</label>
              </fieldset>
              <button type="submit" > Register</button>
            </fieldset>
          </form>
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
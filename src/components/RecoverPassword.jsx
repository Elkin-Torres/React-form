import { Link } from "react-router-dom"


const RecoverPassword = () => {
  return (
    <main>
      <div className="container">
        <div className="container__box">
          <form autoComplete="off">
            <fieldset className="container__fieldset">
              <legend>Recover Password</legend>
              <fieldset>
              <label htmlFor="emailRecover" >Email</label>
              <input type="email" id="emailRecover"  />
              <p className="container__error">Invalid email</p>
              </fieldset>
              <button type="submit" > Send</button>
            </fieldset>
          </form>
          <p>Already have an account?
          <Link to={"/signin"} ><span> Sign in!</span></Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default RecoverPassword
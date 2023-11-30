import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <main>
      <div className="container">
        <div className="container__box">
          <form autoComplete="off">
            <fieldset className="container__fieldset" >
              <legend>Sign In</legend>
              <fieldset>
              <label htmlFor="emailSignIn" >Email</label>
              <input type="email" id="emailSignIn"  />
              <p className="container__error">Invalid email</p>
              </fieldset>
              <fieldset>
                <label htmlFor="passwordSignIn" >Password</label>
                <input type="password" id="passwordSignIn"/>
                <p className="container__error">Invalid password</p>
              </fieldset>
              <button type="submit" >Login</button>
              <Link to={"/recoverpassword"} >
                <span className="container__forgot">Forgot password?</span>
              </Link>
            </fieldset>
          </form>
          <p>Don&apos;t have an account?
            <Link to={"/signup"} ><span> Sign up</span></Link>
             </p>
        </div>
      </div>
    </main>
  )
}

export default SignIn
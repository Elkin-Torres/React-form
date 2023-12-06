import {  Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import RecoverPassword from "../components/RecoverPassword"
import Menu from "../components/Menu"
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"
import FirstForm from "../components/firstForm"
import SecondForm from "../components/SecondForm"
import ThirdForm from "../components/ThirdForm"
import FilledOutForm from "../components/FilledOutForm"


const MyRouter = () => {
  return (
    <Routes>
        <Route path="/React-form" element={<Menu />} >
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="recoverpassword" element={<RecoverPassword /> } />
            <Route path="firstform" element={<FirstForm />} />
            <Route path="secondform" element={<SecondForm />} />
            <Route path="thirdform" element={<ThirdForm />} />
            <Route path="filledoutform" element={<FilledOutForm />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
        
    </Routes>
  )
}

export default MyRouter
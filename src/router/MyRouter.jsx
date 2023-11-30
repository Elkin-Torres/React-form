import {  Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import RecoverPassword from "../components/RecoverPassword"
import Menu from "../components/Menu"
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"


const MyRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Menu />} >
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="recoverpassword" element={<RecoverPassword /> } />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
        
    </Routes>
  )
}

export default MyRouter
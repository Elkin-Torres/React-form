import { Link, Outlet } from "react-router-dom"
import { IoHome } from "react-icons/io5";


const Menu = () => {
  return (
    <>
    <nav className="nav">
        <Link to={"/React-form"} className="nav-max">Home</Link>
        <Link to={"/React-form"} className="nav-min" > <IoHome /></Link>

    </nav>
    <Outlet />
    </>
  )
}

export default Menu
import { Link, Outlet } from "react-router-dom"
import { IoHome } from "react-icons/io5";


const Menu = () => {
  return (
    <>
    <nav className="nav">
        <Link to={"/"} className="nav-max">Home</Link>
        <Link to={"/"} className="nav-min" > <IoHome /></Link>

    </nav>
    <Outlet />
    </>
  )
}

export default Menu
import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import useUser from "../Auth/User";
//import "./Layout.css";
function Layout() {
  // const Navegation=()=>{
  const { user, onLogout } = useUser();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/home " className="navbar-brand"> REACT PROYECT
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/home " className="nav-link">Home <span className="sr-only"></span>
              </Link>
            </li>

           
            <li className="nav-item">
              <Link to="/posts" className="nav-link"><RiAdminFill />Post
              </Link>
            </li>

          
            <li className="nav-item">
              <Link to="/product-admin" className="nav-link"><BiUserCircle />Login
              </Link>
            </li>

            {user && (
              <button className="btn btn-primary" onClick={() => onLogout()}>
                Salir({user.user})
              </button>
            )}

          </ul>

        </div>

      </nav>
      {/* <Navegation/> */}
      <center><Outlet /></center>

    </>

  )

}
export default Layout;
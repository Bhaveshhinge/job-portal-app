import "./index.css"
import { Link, useNavigate } from "react-router-dom";
import logo from '/jobsimg.png'
import Cookies from 'cookies-js';
import { FaBars } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";


const Navbar = () => {

    const [isopen,setisopen]=useState(false)

    const toggleMenu=()=>{
        setisopen(!isopen)
    }

    const nav=useNavigate();
    // const token=Cookies.get("Mytoken")
    // console.log(token)

    const logoutfunc=()=>{
        console.log("function..")
        Cookies.expire("Mytoken");
       nav('/login')
    }


    return (
        <>
            <header className="headers">
                <nav className="navbars">
                    <img src={logo} alt="Jobs logo img" />
                     <h1>Find You jobs..</h1>
                </nav>

             <div className={isopen?"nav-logout active":"nav-logout"}>
                  <div className="nav-link">
                   <ul>
                    <li>
                         <Link to='/'>Home</Link>
                    </li>
                    <li>
                         <Link to='/jobs'>Jobs</Link>
                    </li>
                    <li>
                         <Link to='https://www.instagram.com/_bhavesh_hinge_/?igsh=cm00a3RybTloN3Ru#'>Contact</Link>
                    </li>
                   </ul>
                </div>

                <form action="#" className='search-bars'>
                    <input type="button" value="Logout" onClick={logoutfunc} />
                    
                </form>
             </div>

            <div className="menu-bar" onClick={toggleMenu}>
              {
                isopen?(< ImCross/>):( <FaBars/>)
              }
            </div>
            </header>
        </>
    )
}

export default Navbar
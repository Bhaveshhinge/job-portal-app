import { Link, useNavigate } from 'react-router-dom'
import logo from '/jobsimg.png'
import { FaSearch, FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaUser } from "react-icons/fa";
import { FaFirefoxBrowser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import './index.css'
import { useEffect, useState } from 'react';
import Cookies from 'cookies-js';


const Login = () => {

    const [allvalues, setvalues] = useState({
        username: "",
        password: "",
        errormsg: ""
    })

    const token = Cookies.get("Mytoken")
    useEffect(() => {
        if (token !== undefined) {
            nav('/')
        }
    }, [])

    const nav = useNavigate();

    const getlogindetails = async (e) => {

        e.preventDefault();
        // console.log("Working...")

        const api = "https://apis.ccbp.in/login";

        const userdata = {
            username: allvalues.username,
            password: allvalues.password
        }

        const options = {
            method: "POST",
            body: JSON.stringify(userdata)
        }

        try {
            const responce = await fetch(api, options)
            // console.log(responce)
            const data = await responce.json();

            if (responce.ok) {
                Cookies.set("Mytoken", data.jwt_token);
                nav('/')
                // console.log(data);
            }
            else {
                console.log(data);
                setvalues({ ...allvalues, errormsg: data.error_msg })
            }


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <img src={logo} alt="Jobs logo img" />
                </nav>

                <form action="#" className='search-bar'>
                    <input type="text" placeholder='Search...' />
                    <button><FaSearch /></button>
                </form>
            </header>
            <div className="background"></div>
            <div className="container">
                <div className="content">
                    <h2 className='logo'>SkillMatch<FaFirefoxBrowser /></h2>
                    <div className="text-sci">
                        <h1>Welcome <br /><span>To our Web site</span></h1>
                        <p>Finding the right job doesn’t have to be hard. We bring together opportunities from trusted companies so you can search, apply, and move forward in your career with ease. Whether you’re just starting out or looking for something new, ww  help you.</p>
                        <div className="social-icons">
                            <Link to='#'>< FaLinkedinIn /></Link>
                            <Link to='#'>< FaFacebookF /></Link>
                            <Link to='#'>< FaTwitter /></Link>
                            <Link to='#'>< FaInstagram /></Link>
                        </div>
                    </div>

                </div>


                <div className="logreg-box">
                    <div className="form-box login">
                        <form action="#" onSubmit={getlogindetails}>
                            <h2>Sign In</h2>
                            <div className="input-box">
                                <span className='icon'><FaUser /></span>
                                <input type="text" onChange={(e) => setvalues({ ...allvalues, username: e.target.value })} required />
                                <label>UserName</label>
                            </div>
                            <div className="input-box">
                                <span className='icon'>< RiLockPasswordFill /></span>
                                <input type="password" onChange={(e) => setvalues({ ...allvalues, password: e.target.value })} required />
                                <label>PassWord</label>
                            </div>
                            <div>
                                <p>{allvalues.errormsg}</p>
                            </div>
                            <div className="remember-pasword">
                                <label>
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                            </div>

                            <button type='submit' className='btn'> Sign In</button>
                            <br />
                            <br />
                            <h3>Login Details:</h3>
                            <p>
                                Username: rahul
                                <br />
                                Password: rahul@2021
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Login
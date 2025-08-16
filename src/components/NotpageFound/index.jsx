import { Link } from "react-router-dom"
import Errorpage from "/pageerror.webp"
import './index.css'

const Notpagefound = () => {

    return (
        <>
            <div className="not-found--page">
                <h1>Oops! It seems the page you are looking for does not exist. Please check the URL for any mistakes or return to the homepage.</h1>
                <img src={Errorpage} alt="" srcset="" />
               <Link to='/'><button>Go Back Home</button></Link>
            </div>
        </>
    )
}

export default Notpagefound
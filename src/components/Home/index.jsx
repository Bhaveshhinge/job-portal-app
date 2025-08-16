import './index.css'
import { FaFirefoxBrowser } from "react-icons/fa6";
import './index.css'
import heroimg from '/herogirl.avif'
import Navbar from "../Navbar"
import { Link } from 'react-router-dom';


const Home = () => {



    return (
        <>
            <div className="backgrounds">
                <Navbar />
                <div className="containers">
                    <div className="contents">
                        <h2 className='logos'>SkillMatch<FaFirefoxBrowser /></h2>
                        <div className="text-scis">
                            <h1>Your <br /><span>Next career starts here</span></h1>
                            <p> Find jobs that match your skills and interests.
                                Whether you’re looking for your first job or your next career move,
                                we make it easy to search, apply, and connect with the right companies.
                                Start today and take one step closer to the job you want.</p>
                            <div className="button-home">
                               <Link to="/jobs"><button>Finds Jobs...</button></Link>
                            </div>
                        </div>

                    </div>

                    <div className="heroimg-boxs">
                        <div className="cont-img">
                            <img src={heroimg} alt="Girl image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
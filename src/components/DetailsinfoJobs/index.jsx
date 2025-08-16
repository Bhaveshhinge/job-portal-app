import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Navbar from "../Navbar";
import Cookies from "cookies-js";
import { Link } from "react-router-dom";
import './index.css'
import { FaStar } from "react-icons/fa";
import { FaLocationCrosshairs,FaIndianRupeeSign,FaShareFromSquare} from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiFireflake } from "react-icons/gi";
import Loader from "../Loader";




const DetailsinfoJobs = () => {

    const [allvalues, setvalues] = useState({
        jobsinfo: {},
        similerjobs: [],
        ischeck: true
    })

    const token = Cookies.get("Mytoken")

    const { id } = useParams();

    const getdetailsjobinfo = async () => {

        const api = ` https://apis.ccbp.in/jobs/${id}`

        const options = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await fetch(api, options)

            const data = await response.json()
            console.log(data.similar_jobs)
            setvalues({ ...allvalues, jobsinfo: data.job_details, similerjobs: data.similar_jobs, ischeck: false })

        } catch (error) {
            console.log(error);

        }

    }
    useEffect(() => {

        getdetailsjobinfo()
    }, [])


    return (
        <>
            <div className="backgroundss">
                <Navbar />
                {
                    allvalues.ischeck ? ( <div className="loader-cont">
                           <Loader />
                        </div>) : (<>
                        <div className="main-cont--jobs">
                            <div className="job-img--title">
                                <figure>
                                    <img src={allvalues.jobsinfo.company_logo_url} alt="" />
                                </figure>
                                <div className="title-rating">
                                    <h1>{allvalues.jobsinfo.title}</h1>
                                    <h2><span><FaStar/></span>{allvalues.jobsinfo.rating}</h2>
                                </div>
                            </div>

                            <div className="jobtype-location--package">
                                <div className="job-loc">
                                    <h1><span>< BsBriefcaseFill /></span>{allvalues.jobsinfo.employment_type}</h1>
                                    <h1><span><FaLocationCrosshairs/></span>{allvalues.jobsinfo.location}</h1>
                                </div>
                                <div className="package">
                                    <h1><span><FaIndianRupeeSign/></span>{allvalues.jobsinfo.package_per_annum}</h1>
                                </div>
                            </div>

                            <div className="description-visit">
                                <div className="desc-visit">
                                    <h1>Description</h1>
                                    <Link to={allvalues.jobsinfo.company_website_url}><h2><span><FaShareFromSquare/></span>Visits</h2></Link>
                                </div>
                                <p>{allvalues.jobsinfo.job_description}</p>
                            </div>

                            <div className="skill">
                                <h1>Requird Skills:</h1>
                                <ul>
                                    {
                                        allvalues.jobsinfo.skills.map((e) => {
                                            return (
                                                <li key={e.name} className="skill-items">
                                                    <img src={e.image_url} alt="" />
                                                    <h3>{e.name}</h3>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="life-company">
                                <figure>
                                    <img src={allvalues.jobsinfo.life_at_company.image_url} alt="" />
                                </figure>
                                <div className="desc-company">
                                    <h1><span>< GiFireflake /></span>Life at Company..... </h1>
                                    <p>{allvalues.jobsinfo.life_at_company.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="similer-cont-jobs">
                            <ul>
                                {
                                    allvalues.similerjobs.map((jobs) => {
                                        return (
                                            <li key={jobs.id} className="similer-main-cont">
                                                <div className="job-img--title">
                                                    <figure>
                                                        <img src={jobs.company_logo_url} alt="" />
                                                    </figure>
                                                    <div className="title-rating">
                                                        <h1>{jobs.title}</h1>
                                                        <h2><span><FaStar/></span>{jobs.rating}</h2>
                                                    </div>
                                                </div>

                                                <div className="jobtype-location--package">
                                                    <div className="job-loc">
                                                        <h3><span>< BsBriefcaseFill /></span>{jobs.employment_type}</h3>
                                                        <h3><span><FaLocationCrosshairs/></span>{jobs.location}</h3>
                                                    </div>
                                                </div>

                                                <div className="description-visit">
                                                    <div className="desc-visit">
                                                        <h1>Description</h1>
                                                    </div>
                                                    <p>{jobs.job_description}</p>
                                                </div>

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </>
                    )
                }
            </div>
        </>
    )
}

export default DetailsinfoJobs
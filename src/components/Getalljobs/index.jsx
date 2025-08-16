import { FaStar, FaRupeeSign } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BsFillBriefcaseFill } from "react-icons/bs";
import './index.css'
import { useNavigate } from "react-router-dom";



const Getalljobs = (props) => {
    const nav=useNavigate()

    const { jobsitem } = props

    // console.log(jobsitem)
    const moredetails=(id)=>{
        // console.log(id)
        nav(`/jobs/datails/${id}`)
    }


    return (
        <>
            <li className="jobs-main-cont">
                <div className="demo">
                    <div className="img-title--section">
                        <figure>
                            <img src={jobsitem.company_logo_url} alt="company_logo_url" />
                        </figure>
                        <div className="title-rateing">
                            <h1>{jobsitem.title}</h1>
                            <h2><span>< FaStar /></span>{jobsitem.rating}</h2>
                        </div>
                    </div>
                    <div className="price">
                        <h3><span><  FaRupeeSign /></span>{jobsitem.package_per_annum}</h3>
                    </div>
                </div>

                <div className="location-jobtype">
                    <h3><span><ImLocation2 /></span>{jobsitem.location}</h3>
                    <h3><span>< BsFillBriefcaseFill /></span>{jobsitem.employment_type}</h3>
                </div>

                <div className="description">
                    <h2>Description</h2>
                    <p>{jobsitem.job_description}</p>
                </div>
                <div className="applybtn">
                    <button onClick={()=>moredetails(jobsitem.id)}>Apply Now</button>
                </div>
            </li>
        </>
    )
}

export default Getalljobs
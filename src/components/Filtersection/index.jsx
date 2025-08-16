import { useEffect, useState } from "react";
import Cookies from "cookies-js";
import profile from "/profile.jpg"
import './index.css'

const Filtersection = (props) => {

     const [allvalues,setvalues]=useState({
        profile_info:{}
     })

    const token = Cookies.get("Mytoken");



    const getprofiledetails = async () => {

        const api = "https://apis.ccbp.in/profile"

        const options = {
            method:"GET",
            headers:{
                "content-type":"application/json",
                Authorization:`Bearer ${token}`
            }
        }

        try {
            const response = await fetch(api, options)

            const data = await response.json();
            setvalues({...allvalues,profile_info:data.profile_details})
            // console.log(data.profile_details)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getprofiledetails();
    }, [])


    const Jobtype=[
        {
            id:"FULLTIME",
            title:"Fulltime"
        },
        {
            id:"PARTTIME",
            title:"Parttime"
        },
        {
            id:"INTERNSHIP",
            title:"Internship"
        },
        {
            id:"FREELANCE",
            title:"Freelance"
        }
    ]

       const Salery_range=[
        {
            id:1000000,
            title:"10 LPA and above"
        },
        {
            id:2000000,
            title:"20 LPA and above"
        },
        {
            id:3000000,
            title:"30 LPA and above"
        },
        {
            id:4000000,
            title:"40 LPA and above"
        }
    ]


    const {Functiontogetdata}=props

    const getjobtype=(e)=>{
        
        Functiontogetdata(e.target.value,e.target.checked)
        
    }

    const getrange=(e)=>{
        Functiontogetdata(e.target.value)
    }
   

    return (
        <>
            <div className="profile-section">
                <div className="pofile-img">
                    <img src={allvalues.profile_info.profile_image_url} alt="profile_image_url"/>
                </div>
                <br />
                <br />
                <hr />
                 <br />
                <div className="profilename">
                    <h1>{allvalues.profile_info.name}</h1><br />
                    <h2>{allvalues.profile_info.short_bio}</h2>
                </div>

            </div>

            <div className="checkbox-section">
                <h1>Types of jobs</h1><br />
             <ul>
              {
                Jobtype.map((e)=>{

                    return(
                        <li key={e.id}>
                            <input type="checkbox" name="" id={e.id} value={e.id} onClick={getjobtype}/>
                            <label htmlFor={e.id}>{e.title}</label>
                        </li>
                    )
                })
              }
             </ul>
            </div>

             <div className="Range-section">
                <h1>Salery Range of jobs</h1><br />
             <ul>
              {
                Salery_range.map((e)=>{

                    return(
                        <li key={e.id}>
                            <input type="radio" name="range" id={e.id} value={e.id} onClick={getrange} />
                            <label htmlFor={e.id}>{e.title}</label>
                        </li>
                    )
                })
              }
             </ul>
            </div>
        </>
    )

}

export default Filtersection
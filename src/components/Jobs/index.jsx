import { useEffect, useState } from "react"
import Cookies from "cookies-js"
import Navbar from "../Navbar"
import './index.css'
import Getalljobs from "../Getalljobs"
import Filtersection from "../Filtersection"
import { FaSearch } from "react-icons/fa";
import Notfound from '/notfound.png'
import Loader from "../Loader"
// import { set } from "cookies"

const Jobs = () => {

    const [allvalues, setvalues] = useState({
        Jobslist: [],
        search: "",
        jobtype: [],
        jobrange: "",
        loader: true
    })

    const getallinformationjobs = async () => {

        const token = Cookies.get("Mytoken")

        const api = `https://apis.ccbp.in/jobs?search=${allvalues.search}&employment_type=${allvalues.jobtype}&minimum_package=${allvalues.jobrange}`

        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const responce = await fetch(api, options)

            // console.log(responce);

            const data = await responce.json()

            // console.log(data.jobs)
            if (responce.ok) {
                setvalues({ ...allvalues, Jobslist: data.jobs,loader:false })
            }


        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getallinformationjobs()
    }, [allvalues.search, allvalues.jobtype, allvalues.jobrange])

    const getserch = (e) => {

        if (e.key === "Enter") {
            setvalues({ ...allvalues, search: e.target.value })
        }

        if(e.key==="Backspace" && e.target.value==""){
            setvalues({...allvalues,search:""})
        }

    }


    const getdatafromfilter = (value, ischeck) => {
        if (ischeck !== undefined) {
            if (ischeck) {
                setvalues({ ...allvalues, jobtype: [...allvalues.jobtype, value] })
            } else {
                setvalues({ ...allvalues, jobtype: allvalues.jobtype.filter((e) => e !== value) })
            }
        }
        else {
            console.log(value)
            setvalues({ ...allvalues, jobrange: value })
        }
    }



    return (
        <>
            <div className="backgroundss">
                <Navbar />
                {
                    allvalues.loader ? (
                        <div className="loader-cont">
                           <Loader />
                        </div>
                    ) : (
                        <div className="main-cont--jobsection">
                            <div className="search-section">
                                <h1>Search jobs according to your types...</h1>
                                <form action="#" className="search-box">
                                    <input type="text" placeholder="Find you jobs..." onKeyDown={getserch}  />
                                    <button><FaSearch /></button>
                                </form>
                            </div>
                            <div className="grid-cont">
                                <div className="left-cont">
                                    <Filtersection Functiontogetdata={getdatafromfilter} />
                                </div>
                                <div className="right-cont">
                                    {
                                        allvalues.Jobslist.length === 0 ? (
                                            <div className="not-founds">
                                                <h1 className="not-found-heading">No data available for your query. Would you like to refine your search?</h1>
                                                <br />
                                                <img src={Notfound} alt="####"  />
                                            </div>) : (
                                            <ul>
                                                {
                                                    allvalues.Jobslist.map((jobs) => <Getalljobs key={jobs.id} jobsitem={jobs} />)
                                                }
                                            </ul>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Jobs
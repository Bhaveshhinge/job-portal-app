import Cookies from 'cookies-js';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRouter =(props)=>{

    const {Compment}=props

     const token=Cookies.get("Mytoken");
     const nav=useNavigate();

     useEffect(()=>{

        if(token===undefined){
            nav('/login');
        }
     },[])   
     


    return(
        <>
        <Compment />
        </>
    )
}

export default ProtectedRouter
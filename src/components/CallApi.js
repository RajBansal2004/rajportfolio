import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
const CallApi=()=>{
    const [data,setData]=useState();
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log("result----",response);
            setData(response.data);

        })
    },[])
    return(
        <>
        <h1>Hello Mr. Raj Bansal</h1>
        </>
    )
}
export default CallApi;
import axios from "axios";

const baseUrl=" https://jsonplaceholder.typicode.com/posts";
const headers={
    "Content-Type":"application/json"
}

const apiResponse=async (url)=>{
    const {data}=await axios.post(baseUrl+""+url,{headers:headers})
    console.log("main data--------------",data);
    return data;
}
export {apiResponse}
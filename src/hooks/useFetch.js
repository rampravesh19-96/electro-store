import { useState,useEffect } from "react";
import {fetchDataFromAPi} from "../utils/api"

const useFetch = (endpoint) => {
    const [data,setData] = useState()

    useEffect(()=>{
        makeApiCall()
    },[endpoint])

    const makeApiCall = async ()=>{
        const res = await fetchDataFromAPi(endpoint)
        setData(res)
    }
    return {data}
}

export default useFetch
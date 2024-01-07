import axios from "axios"

const params = {
    headers:{
        authorization : "bearer "+process.env.REACT_APP_STRIBE_APP_KEY
    }
}

export const fetchDataFromAPi = async (url) => {
    try{
        const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url,params)
        return data
    }catch(error){
        console.log(error);
        return error
    }
}

export const makePaymentrequest = axios.create({
    baseURL : process.env.REACT_APP_DEV_URL,
    headers:{
        authorization : "bearer "+process.env.REACT_APP_STRIBE_APP_KEY
    }
})
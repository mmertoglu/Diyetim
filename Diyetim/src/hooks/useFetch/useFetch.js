import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    

     const fetchData =  async () => {
        try {
            const { data: responseData } = await axios.get(url , {
                headers : {
                    'x-app-id': "b5846f08",
                    'x-app-key': "9f3541fbc264e697c4334cc6bff34742",
                    'x-remote-user-id': "0"
                    }
            })
            setData(responseData)
            console.log(data)
            setLoading(false)
        } catch (err) {
            setError(err.message);
            setLoading(false)
        }
        


    }
    useEffect(()=> {
        fetchData()
    }, [url])
    return {data,loading,error,fetchData}
}
export default useFetch;
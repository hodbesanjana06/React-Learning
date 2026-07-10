import { useState , useEffect } from "react";

function useEmpFetch(url){

    const [data , setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState("")

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((result)=>{
            setData(result)
            setLoading(false)
        })
        .catch((error)=>{
            setError("something ")
        })
    }, [url])

        return{ data , error , loading}
}
export default useEmpFetch;
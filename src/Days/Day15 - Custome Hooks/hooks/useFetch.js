// import { useState , useEffect } from "react";

// function useFetch(url){
//     const [data , setData] = useState([])
//     const [loading , setLoading] = useState(true)
//     const [error , setError] = useState("")

//     useEffect(()=> {
//         fetch(url)
//         .then((res)=> res.json())
//         .then((result)=> {
//             setData(result)
//             setLoading(false)
//         })
//         .catch(()=>{
//             setError("Something went wrong..")
//             setLoading(false)
//         })
//     }, [url])

//     return { data , loading , error}
   
// }
// export default useFetch;


import { useState , useEffect } from "react";

function useFetch(url){

    const [data , setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState("")

    useEffect(()=> {
        fetch(url)
        .then((res)=> res.json())
        .then((result)=> {
            setData(result)
            setLoading(false)
        })
        .catch(()=>{
            setError("Something is wrong ...")
            setLoading(false)
        })
    }, [url])

    return {data , loading , error}
    
}
export default useFetch;
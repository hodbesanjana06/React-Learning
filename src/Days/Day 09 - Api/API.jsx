
import { useState , useEffect } from "react";

function API(){
    const [user , setUser] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        // fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data)=>{
            setUser(data)
            setLoading(false)
            // console.log(data);
            
        })
    },[])
    
    return(
        <>
           
            {
                loading ? <h2>Data Loading....</h2>:user.slice(0,5).map((e)=>(
                    <>
                        <div className="small-box" key={e.id}>
                            <h2>Name : {e.name}</h2>
                            <h4>
                                Email : {e.email} <br /> <br />
                                Phone : {e.phone} <br /> <br />
                                Website : {e.website}
                            </h4>

                        </div>
                    
                    </>
                ))
            }
        </>
    )
}

export default API ;


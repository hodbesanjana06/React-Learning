
import { useState , useEffect } from "react";

function Child(){
    useEffect(()=>{
        console.log("component rendered");

    return ()=>{

        console.log("Component close");
        
    }
        
    }, [])
    
    return(
        <h2>i am a child component</h2>
    )
}

function UseEffect(){

    const [count  , setCount] = useState(0)
    const [name , setName] = useState("")
    const [isdark, setTheme] = useState(false)
    const [isshow , setshow ] = useState(false)

    useEffect(()=>{
        
        console.log("welocme to react");
        console.log("Count : ", count);
        console.log("name : ", name);
        console.log("Theme Toggle : ", isdark );
        
        
    },[count,name,isdark])


    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         console.log("Hello");
            
    //     },1000);
    //     return ()=>{
    //         clearInterval(timer);
    //     }
    // },[])

    const [Count , setcount] = useState(0)

    useEffect(()=>{
        document.title = `Count : ${Count}`
    }, [Count])
    return(
        <>

            <div className="small-box">
                
                <h2>Task 1 : print in console</h2>
                <h2>Welcome to React !</h2>
            </div>

            <div className="small-box">
                <h3>Task 2 :Count Updated </h3>
                <h2>Count : {count}</h2>
                <button onClick={()=> setCount( count + 1)}>Increament </button>
            </div>

            <div className="small-box">
                <h3>Task 3 : update name</h3><br />
                <div className="from-group">
                    <label>Name : </label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
                </div><br />
                <h3>Name : {name}</h3>
            </div>

            <div className="small-box">
                <h2>Task 4 : Boolean value </h2>
                <h3>Theme : {isdark ? "Light" : "Dark"}</h3>
                <button onClick={()=>setTheme(!isdark)}>Toggle Theme</button>
            </div>

            <div className="small-box">
                <h3>useEffect with count </h3>
                <h2>COUNT : {Count}</h2>
                <button onClick={()=> setcount(Count + 1)}>Increament </button>
            </div>

            <div className="small-box">
                <h3>cleanup function exm:</h3>
                <button onClick={()=> setshow(!isshow)}>{isshow ? "hide component ": "SHow component"}</button>
                {
                    isshow && (
                        <Child />
                        
                    )
                }
            </div>
        
        </>
    )
}

export default UseEffect;
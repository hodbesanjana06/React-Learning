import { useState , useEffect, useMemo } from "react";

function Optimization(){

    const [count , setCount] = useState("")
    const [theme , setTheme] = useState("")

    const square = useMemo(()=>{
        console.log("calculating......");
        return count * count;
        
    }, [count])

    return(
        <>

            <h2>Count : {count} <br />
                Square : {square} <br />
                Theme : {theme} <br />
            </h2>

            <button onClick={()=> setCount(count + 1)}>Increase Count</button>
            <button onClick={()=> setTheme(theme === "Light" ? "Dark" : "Light")}>Toggle Theme</button>
        </>
    )
}

export default Optimization;
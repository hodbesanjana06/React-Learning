
import { useMemo, useState } from "react";

function UseMemoTask(){
    const [count , setCount] = useState(0)
    const [theme , setTheme] = useState(true)
    const square = useMemo(() =>{
        console.log("calculating square...");
        return count * count
        
    } , [count])
    return(
        <>
        <div className="container">
             <h3>usememo example</h3>
             <h4>
                count { count} <br />
                Square {square} <br />
                Theme {theme ? "Dark" : "Light"} <br />
             </h4>

             <button onClick={()=> setCount(count + 1)}>Increse Count</button>
             <button onClick={()=> setTheme(!theme)}>Toggle Theme</button>
        </div>
        
        </>
    )
}
export default UseMemoTask;
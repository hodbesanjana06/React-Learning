
import { useState } from "react";

function Task(){
   const [isLogin , setLogin] = useState(false)
   const [isShow , setPassword ] = useState(false)
   const [isStudet , setDetails] = useState(false)
   const [isTheme , setTheme] = useState(false)
    return(
        <>
        
            <div className="small-box">
                <h3>onlcy ui change on button</h3>
                <button onClick={()=> setLogin(true) }>Login</button>
                 {isLogin && (<h2>Welcome User !</h2>)}
            </div>


            <div className="small-box">
                <h3>button & UI also Change </h3>
                <button onClick={()=>setPassword(!isShow)}>{isShow ? "Hide Password" : "Show Password"}</button>
                {isShow &&(<h2>Sanjana_2206</h2>)}
            </div>


            <div className="small-box">
                <h3>button & UI also Change</h3>
                <button onClick={()=> setDetails(!isStudet)}> {isStudet ? "Hide Student " : "Show Student "}</button>
                {isStudet && (
                    <h2>Name : Rahul <br /> 
                        Age : 22 <br />
                        Course : BCA
                    </h2> 
                    )}
            </div>

            
            <div className="small-box">
                <h3>button not change but txt change(Toggle)</h3>
                <button onClick={()=> setTheme(!isTheme)}>Switch Theme</button>
                <h2>{isTheme ? "Light Theme" : "Dark Theme"} </h2> 
                    
            </div>
        </>
    )
}

export default Task;
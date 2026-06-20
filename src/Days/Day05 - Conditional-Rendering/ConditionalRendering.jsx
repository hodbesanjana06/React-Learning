
import { useState } from "react";

function ConditionalRendering(){
    let age = 18
    let item = 20
    let isTheme = false
    const [isOnline , setLine] = useState(false)
    const [isShow , setInfo] = useState(false)
    return(
        <>

        <div className="small-box">
            <h2>Ternary Operator</h2>
            {<h2>{age >= 18?"Adult":"Minor"}</h2>}
        </div>
            
        <div className="small-box">
            <h2>Ternary Operator with button</h2>
            <button onClick={()=> setLine(!isOnline)}>Toggle</button>
            <h2>{isOnline ? "Online": "Offline"}</h2>
        </div>


        <div className="small-box">
            <button onClick={()=> setInfo(!isShow)}>{isShow ? "Hide Details ": "Show Details"}</button>
            {
                isShow && (
                    <h2>Name : Sanjana
                         <br></br>
                         Age : 22
                    </h2>
                   
                )
            }
        </div>

        <div className="small-box">
            <h2>Ternary Operator</h2>
            <h2>{isTheme ? "Dark Mode" : "Light Mode"}</h2>

        </div>

        <div className="small-box">
            <h2>{item == 0 ? "Card Empty" : `Items in Card : ${item}`}</h2>
        </div>
                
        </>
    )
}

export default ConditionalRendering;
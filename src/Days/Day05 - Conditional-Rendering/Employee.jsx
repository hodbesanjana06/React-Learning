import { useState } from "react";

function Employee({name , id , age , dept, username , exp , skills}){
    const [isShow , setDetails] = useState(false)
    const [isSkill , setSkills] = useState(false)
    const [isTheme , setTheme] = useState(false)
    const [isonline , setSatus] = useState(false)
    return(
        <>
            <div className="small-box">
                <h3>Employee Profile Viewer</h3>


                <h2>Theme :{isTheme ? " Light" : "Dark"}</h2>
                <button onClick={()=> setTheme(!isTheme)}>Toggle Theme</button><br />


                <h2>
                    Name : {name} <br />
                    Department : {dept} <br />
                    Status : {isonline ? " Offline" : "Online"}
                </h2>
                <button onClick={()=> setSatus(!isonline)}>{isonline ? "Go Online" : "Go Offline"}</button><br /><br />



                <button onClick={()=> setDetails(!isShow)}>{isShow ? "Hide Deatils" : "Show Details"}</button>
                {isShow &&(
                    <h2>
                        Id : {id} <br/>
                        Username : {username} <br />
                        Age : {age} <br />
                        Experience : {exp} Years

                    </h2>
                )}


                <br /><br /><button onClick={()=> setSkills(!isSkill)}>{isSkill ? "Hide Skills" : "Show Skills"}</button>
                {
                    isSkill &&(
                        <ul>
                            {skills.map ((s)=>(
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    )
                }



            </div>
        </>
    )
}

export default Employee;
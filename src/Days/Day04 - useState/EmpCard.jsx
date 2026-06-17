import { useState } from "react";

function EmpCard({name , age , dept}){
    const [show , setUsername] = useState(false)
    const [skills , setSkills] = useState(['React', 'Py', 'Django'])
    // console.log(skills);
    const [likes , setLike] = useState(0)
    
    return(
        <>
        
        <div className="small-box">
                <h2><span className="label">Name:</span> {name}</h2>                
                <h2><span className="label">Age:</span> {age}</h2>
                <h2><span className="label">Depart: </span> {dept}</h2>

                <h2>{show ? 'sanjana_2206 ': ''}</h2>
                <button className="button1" onClick={()=>setUsername(!show)}>Show Username </button><br /><br />
               
                <h3>Skills</h3>
                <ul>
                    {skills.map((s)=>(
                        <li key={s}>{s}</li>
                    ))}
                </ul><br /><br />
                
                <button onClick={()=> setSkills([...skills , "Node.js"])}>Add Skill</button>
                <button onClick={()=> setSkills(skills.slice(0 , -1))}>Remove Skill</button>

                
                <h2 onClick={()=> setLike(likes + 1)}>👍 Likes : {likes}</h2>

        </div> 
            
        </>
    )
}

export default EmpCard;
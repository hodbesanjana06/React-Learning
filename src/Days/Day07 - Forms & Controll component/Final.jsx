
import { useState } from "react";

function Final({student}){

    const [name , setName] = useState("")
    const [role , setRole ] = useState("")
    const [experience , setexperience] = useState("")
    const [salary , setSalary] = useState("")
    const [isshortlisted , setShortlisted] = useState(false)
    const [isShow , setShow] = useState(false)

    let selectstudent = student.find(
        (s)=> s.name.toLowerCase() === name.toLowerCase()
    )
    return(
        <>

            <div className="small-box">
                <h4 >Interview Candidate Tracker</h4><br />

                <div className="form-group">
                    <label> Candidate Name : </label>
                   <input type="text" placeholder="Candidate Name " value={name} onChange={(e)=> setName(e.target.value)} /> <br />
                </div>

                <div className="form-group">
                    <label>Role : </label>
                    <input type="text" placeholder="Role" value={role} onChange={(e)=> setRole(e.target.value)} /> <br />
                </div>

                <div className="form-group">
                    <label>Experience : </label>
                    <input type="number"  value={experience} placeholder="Experience" onChange={(e)=> setexperience(e.target.value)}/> <br />
                </div>

                <div className="form-group">
                    <label>Expected Salary : </label>
                    <input type="number" placeholder="Expected Salary " value={salary} onChange={(e)=> setSalary(e.target.value)} />
                </div>

                <div className="form.gropu">
                <h3>Status : {isshortlisted ? "Shortlisted " : "Not Shortlisted"}</h3>
                <button onClick={()=> setShortlisted(!isshortlisted)}>Change Status</button>

                </div>
                

                <button onClick={()=> setShow(!isShow)}>{isShow ? "Hide Details" : "Show Details"}</button>

                {
                    isShow &&(
                        <div className="small-card" >
                            {
                                selectstudent ? (
                                    <>
                                    <h4>
                                        Name : {name} <br /> <br />
                                        Role : {role} <br /> <br />
                                        Experience : {experience} Year<br /> <br />
                                        Salary : {salary}
                                    </h4>
                                        <h2>
                                            Candidate ID : {selectstudent.id} <br /> <br />
                                            Location : {selectstudent.location} <br /><br /> 
                                            Notice Period : {selectstudent.noticeperiod} <br /><br />
                                            Skills :
                                        </h2>
                                        <p> {selectstudent.skills.map((e)=>(<p>{e}</p>))}</p>
                                    </>
                                ) : (
                                    <h3>Not Found </h3>
                                )
                            }

                        </div>
                    )
                }
            </div>
        
        </>
    )
}

export default Final;
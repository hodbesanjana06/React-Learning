
import { useState , useEffect } from "react";

function StudentForm(){

    function handleForm(e){
        e.preventDefault()

        setNameError("")
        setAgeError("")
        setEMailError("")
        setCourseError("")
        setSkillsError("")

        let isvalid = true;

        if(name.trim() === ""){
            setNameError("Name is required")
            isvalid=false
        }else if(name.length < 3){
            setNameError("At least 3 character contain")
            isvalid=false

        }
        if(Number(age) < 15){
            setAgeError("At least 15 + age")
            isvalid=false

        }
        if(!email.includes("@")){
            setEMailError("Email contain @ symbol")
            isvalid=false

        }
        if(course === ""){
            setCourseError("Please select one course")
            isvalid= false
        }
        if(skills.length === 0){
            setSkillsError("at least one selected")
            isvalid=false
        }
        if(isvalid){
            
            setStudents([...students , {name , age , email , course , gender , skills , about}])
            alert("Form submitted sucessfully")
            handleReset()

        }


    }

    function handleReset(){
        setName("")
        setAge("")
        setEmail("")
        setCourse("")
        setGender("")
        setAbout("")
        setSkills([])
    }
    function handleSkill(e){
        const skill = e.target.value;
        const checked = e.target.checked;

        if(checked){
            setSkills([...skills , skill])
        }else{
            setSkills(skills.filter((s) => s !== skill))
        }
    }

    const [name , setName]= useState("")
    const [nameError , setNameError] = useState("")

    const [age , setAge ] = useState("")
    const [ageError , setAgeError] = useState("")

    const [email , setEmail] = useState("")
    const [emailError , setEMailError] = useState("")

    const [course , setCourse] = useState("")
    const [courseError , setCourseError] = useState("")

    const [gender , setGender] = useState("")

    const [skills , setSkills] = useState([])
    const [skillsError , setSkillsError] = useState("")

    const [about , setAbout] = useState("")
    const [isShow , setDetails] = useState(false)
    const [students , setStudents] = useState([])

    return(
        <>
            <h1 className="heading">Student Admission Form</h1>

            <div className="student-form">
                <form onSubmit={handleForm}>
                    <label>Name : </label>
                    <input type="text"  value={name} onChange={(e)=> setName(e.target.value)}/> <br />
                    {nameError && <p style={{color:"red"}}>{nameError}</p>}

                    <label>Age : </label>
                    <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} /> <br />
                    {ageError && <p style={{color:"red"}}>{ageError}</p>}


                    <label>Email : </label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
                    {emailError && <p style={{color:"red"}}>{emailError}</p>}


                    <label> Course : </label>
                    <select  value={course} onChange={(e)=> setCourse(e.target.value)}>
                        <option value="">Select Course</option>
                        <option value="React">React</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JS">JS</option>
                    </select>
                    {courseError && <p style={{color:"red"}}>{courseError}</p>}

                    <label>Gender : </label>
                    <input type="radio" value="Male" onChange={(e)=>setGender(e.target.value)} checked={gender === "Male"} />Male
                    <input type="radio" value="Female" onChange={(e)=>setGender(e.target.value)} checked={gender === "Female"}/>Female <br />

                    <label>Skills : </label>
                    <input type="checkbox" value="HTML" onChange={handleSkill} checked={skills.includes("HTML")}/> HTML
                    <input type="checkbox" value="CSS" onChange={handleSkill} checked={skills.includes("CSS")} />CSS
                    <input type="checkbox" value="React" onChange={handleSkill} checked={skills.includes("React")} /> React <br />
                    {skillsError && <p style={{color:"red"}}>{skillsError}</p>}

                    <label>About : </label>
                    <textarea value={about} onChange={(e)=> setAbout(e.target.value)}></textarea>               
                    <hr />

                    <input type="checkbox" value="I Agree" onChange={handleSkill} checked={skills.includes("I Agree")}/> I Agree <br />



                    <hr /><br /><button type="submit" >submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                    <button type="button" onClick={()=> setDetails(!isShow)}>{isShow? "Hide Deatils" : "Show Deatils"}</button>
                    {
                        isShow &&(
                            students.map((s)=>(
                                <div className="small-card">
                                    <h2>Name : {s.name}</h2>
                                    <h4>
                                        Age : {s.age} <br />
                                        Email : {s.email} <br />
                                        Couser : {s.course} <br />
                                        Gender : {s.gender} <br />
                                        about : {s.about} <br />
                                    </h4>
                                    <p>Skills: {s.skills.join(", ")}</p>
                                </div>
                            ))
                        )
                    }
                </form>
            </div>
        </>
    )
}
export default StudentForm;
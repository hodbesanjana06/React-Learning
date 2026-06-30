import { useState } from "react";

function handleform(e){
    e.preventDefault()
    console.log("Form submitted sucessfully");   
    
}

function AdvanceForm(){
    const [name , setName] = useState("")
    const [bname ,setBookName] = useState("")
    const [author , setAuthor] = useState("")
    const [course , setCourse] = useState(" ")
    const [feedback , setFeedback] = useState("")
    const [gender , setGender] = useState("")
    const [skills , setSkills] = useState([])
    

    function handleSkill(e){
        let skill = e.target.value;
        let checked = e.target.value;

        if(checked){
            setSkills([...skills, skill]);
        }
        else{
            let removeskill = skills.filter((s)=> s !== skill);
            setSkills(removeskill)
        }
    }

    return(
        <>
        
            <h1>Student Form</h1>
            <form action="" onSubmit={handleform}>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Enter Name"/> <br />

                <label>Book Name</label>
                <input type="text" value={bname} onChange={(e)=> setBookName(e.target.value)}  placeholder="Enter Book Name"/> <br />

                <label>Author </label>
                <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)}  placeholder="Enter Author Name"/> <br />
                 <br />

                <label>Select Course : </label>
                <select value={course} onChange={(e)=> setCourse(e.target.value)}>
                    <option value=" ">Select Course</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="AI">AI</option>
                </select>
                <h2>Selected Course : {course}</h2> 
                
                <label>Review : </label>
                <textarea value={feedback} onChange={(e)=> setFeedback(e.target.value)}></textarea>
                <h4>Your Review Below </h4>
                <p>{feedback}</p>
                

                <label>select gender : </label> 
                <input type="radio" value="Male" onChange={(e)=>setGender(e.target.value)} checked={gender === "Male"} />Male
                <input type="radio" value="Female" onChange={(e)=>setGender(e.target.value)} checked={gender === "Female"} />Female <br />

                <label>Select Skills : </label>
                <input type="checkbox" value="React" onChange={handleSkill} checked={skills.includes("React")} />React
                <input type="checkbox" value="HTML" onChange={handleSkill} checked={skills.includes("HTML")} /> HTML


                 <hr /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default AdvanceForm;
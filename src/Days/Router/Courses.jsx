
import { useNavigate } from "react-router-dom";

function Courses(){
    const navigate = useNavigate()
    const courses = [
        {id : 1 , name : "React"},
        {id : 2 , name : "js"},
        {id : 3 , name : "python"},
        {id : 4 , name : "java"},
        {id : 5 , name : "c++"},
    ]
    return(
        <>
           <div className="container">

             <h3>Courses</h3>
                <div className="course-list">
                    {
                        courses.map((c)=>(
                            <button key={c.id} onClick={()=> navigate(`/c/${c.id}`)}>{c.name}</button>
                        ))
                    } 
                </div>
           </div>
        </>
    )
}
export default Courses;
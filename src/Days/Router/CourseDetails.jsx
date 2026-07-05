import { useParams, useNavigate } from "react-router-dom";

function CourseDetails(){
    const {id} = useParams()
    const navigate = useNavigate()
    return(
        <>
        <div className="course-details">
            <h3>Course Details</h3>
            <h4>{id}</h4>
            <button onClick={()=> navigate(-1)}>Back</button>
        </div>

        </>
    )
}
export default CourseDetails;
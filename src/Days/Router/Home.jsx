import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate()
    return(
        <>
            <div className="container">
                <h3>Welcome to Online Course System</h3>
                <button onClick={()=> navigate("/courses")}>Go To Course</button>
                <button onClick={()=> navigate("/contact")}>Contact</button>

            </div>
        </>
    )
}
export default Home;
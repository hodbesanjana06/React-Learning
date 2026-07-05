import { useNavigate, Link , Outlet } from "react-router-dom";

function About(){
    const navigate = useNavigate()
    return(
        <>
            <div className="container">
                <h2>about page ....</h2>
                <div className="about-links">
                    <Link to="mission">Mission</Link> <br />
                     <Link to="team">Team</Link>  <br />
                </div>
             
             <Outlet/>

            <button onClick={()=> navigate(-1)}> Back</button>
            </div>
        </>
    )
}
export default About;
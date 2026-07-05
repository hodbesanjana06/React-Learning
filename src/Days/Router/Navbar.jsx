import { NavLink } from "react-router-dom";

function Navbar(){
    return(
    <>
        <nav>
            <NavLink to="/" style={({ isActive })=>(
                {
                    color : isActive ? "red" : "black"
                }
            )}>Home</NavLink>

            {" | "}

            <NavLink to="/courses" style={({ isActive })=>({
                color : isActive ? "red" : "black"
            })}>courses</NavLink>

            {" | "}


            <NavLink to="/about" style={({ isActive })=>({
                color : isActive ? "red":"black"
            })}>
                About
            </NavLink>

            {" | "}

            <NavLink to="/contact" style={({ isActive })=>({
                color : isActive ? "red" : "black"
            })}>Contact</NavLink>
        </nav>
       
    </>
    )
}
export default Navbar;
import { useContext } from "react";
import UserContext from "./UserContext";

function Profile(){
    const { theme , setTheme } = useContext(UserContext)
    function handleTheme(){
        if (theme === "Light"){
            setTheme("Dark")
        }else{
            setTheme("Light")
        }
    }       
    return(
        <>
            <div className="container">

                <h2>Welcome to my Website</h2>
                <h3>Current Theme  : {theme}</h3>
                <button onClick={handleTheme}>Toggle Theme</button>
        
            </div>
        </>
    )
}
export default Profile;
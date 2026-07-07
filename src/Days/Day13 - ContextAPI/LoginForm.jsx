import { useContext } from "react";
import LoginContext from "./LoginContext";

function LoginForm(){
    function handleLogout(){
        setName("")
        setEmail("")
        setLogin(false)
    }
    const {name , email, isLogin, setName , setLogin,setEmail} = useContext(LoginContext)
    return(
        <>
            <h3>Login page </h3>

            <form>
                <label>Name </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br /> <br />

                <label>Email </label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />  <br />

                <button type="button" onClick={()=> setLogin(true)}>Login</button>

            </form>
            {
                isLogin &&(
                    <div className="container">
                    <h2>Profile Page</h2>
                    <h3>
                        Welcome {name} <br />
                        Email : {email}
                    </h3>
                    <button type="button" onClick={handleLogout}>Logout</button>
                </div>
                )
                
            }
        </>
    )
}
export default LoginForm;
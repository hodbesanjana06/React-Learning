import "./Days/Router/router.css";
import { useState } from "react";
import { Routes , Route } from "react-router-dom";
import LoginForm from "./Days/Day13 - ContextAPI/LoginForm";
import Home from "./Days/Day13 - ContextAPI/Home"; 
import UserContext from "./Days/Day13 - ContextAPI/UserContext";
import Profile from "./Days/Day13 - ContextAPI/Profile";
import LoginContext from "./Days/Day13 - ContextAPI/LoginContext";

function App(){

  const [theme , setTheme] = useState("Light")
  const [name , setName] = useState("")
  const [email,setEmail] = useState("")
  const [isLogin , setLogin] = useState(false)
  return(
    <>
    {/* <UserContext.Provider value={{theme , setTheme}}>
      <div style={{
        // background : theme ==="Dark" ? "#1e1e1e" : "#ffffff",
        // color : theme === "Dark" ? "#ffffff" : "#1e1e1e",
        // minHeight: "100vh",
        // transition : "0.3s ease"
      }}>
          <Home/>
      </div>
    </UserContext.Provider> */}


    <LoginContext.Provider value={{ name , email , isLogin, setName , setEmail , setLogin}}>
        <LoginForm/>
      </LoginContext.Provider>
    </>
  )
}

export default App;








// <Navbar/>
//         <hr />

//         <Routes>

//           <Route path='/' element={<Home/>} />
//           <Route path='/contact' element={<Contact/>} />
//           <Route path='/courses' element={<Courses/>} />
//           <Route path='/c/:id' element={<CourseDetails/>} />

//           <Route path='/about' element={<About/>}>
//               <Route path='mission' element={<Mission/>}/>
//               <Route path='team' element={<Team/>}/>
//           </Route>
//           <Route path='/contact' element={<Contact/>} />
//           <Route path='*' element={<NotFound/>}/>
//         </Routes>
        
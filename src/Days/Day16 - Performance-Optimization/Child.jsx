import React, { useState } from "react";

function Child({name}){
    console.log("Child Render...");
    
    return(
        <>
            <div className="container">
                
            <h3>Welcom {name}</h3>       
            </div>    
         </>
    )
}
export default React.memo(Child);


// -----------------App . jsx ------------------
// import "./Days/Router/router.css";
// import { useState } from "react";
// // import Child from "./Days/Day16 - Performance-Optimization/Child";
// import UseMemoTask from "./Days/Day16 - Performance-Optimization/UseMemoTask";
// // import Optimization from "./Days/Day16 - Performance-Optimization/Optimization";


// function App(){
//   const [count , setCount] = useState(0)
//   const [theme , setTheme]  = useState(true)
//   const [name , setName] = useState("sanjana")


//   return(
//     <>
//       {/* <div className="container">
//           <h2>Count {count}</h2>
//           <button onClick={()=> setCount(count + 1)}>Increment Count</button>
//       </div>
//       <div className="container">
//           <h2>Theme : {theme ? "Dark" : "Light"}</h2>
//           <button onClick={()=> setTheme(!theme)}>Toggle Theme</button>

//           <button onClick={()=> setName(name === "sanjana" ? "Disha" : "sanjana")}>Change Name</button>
//       </div>
//       <Child name={name}/> */}
//       <UseMemoTask/>
//     </>
//   )
// }
// export default App;









import { useState } from "react";

function MovieDashboard({movies}){
    const [isLight , setThem] = useState(false)
    const [isShow , setShow] = useState(false)
    return(
        <>
            <div className="small-box">

                <h3>Movie Dashboard</h3>
                <h2>Theme : {isLight ? "Light" : "Dark"}</h2>
                <button onClick={()=> setThem(!isLight)}>Toggle Theme</button><br />

                <h2>Total Movies : {movies.length}</h2>

                
                <button onClick={()=> setShow(!isShow)}>{isShow ? "Hide Details": "Show Deatils"}</button>
                {
                    isShow &&(
                       movies.map((m)=>(
                        <div key={m.id} className="small-card">
                            <h2>{m.title}</h2>
                            <h3>Rating : {m.rating}</h3>
                            <p>{m.rating >= 9 ? "Blockbuster" : "Good Movie"}</p>
                        </div>
                       ))
                    )
                }
            </div>
        </>
    )
}
export default MovieDashboard;


// (App.jsx Part)
// let movies = [
//   {
//     id: 1,
//     title: "Tumbadchi Manjula",
//     rating: 9
//   },
//   {
//     id: 2,
//     title: "Dashavtar",
//     rating: 10
//   },
//   {
//     id: 3,
//     title: "Avatar",
//     rating: 8
//   }
// ]


import { useState } from "react";

function MovieDashboard({movies}){
    const [isLight , setThem] = useState(false)
    const [isShow , setShow] = useState(false)
    return(
        <>
            <div className="small-box">

                <h3>Movie Dashboard</h3>
                <h2>Theme : {isLight ? "Dark" : "Light"}</h2>
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
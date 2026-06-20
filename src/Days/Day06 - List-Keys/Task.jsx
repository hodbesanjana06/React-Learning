function Task({movies}){
    return(
        <>
            <div className="small-box">

                <h3>Movie Rating Card</h3>
                {movies.map((m)=>(
                    <div key={m.id} className="small-card">
                        <h2>{m.title}</h2>
                        <h2>Rating : {m.rating}</h2>
                        <p>{m.rating >= 9 ? "Blockbuster" : "Good Movie"}</p>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Task;
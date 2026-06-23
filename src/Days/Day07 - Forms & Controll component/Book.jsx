import { useState } from "react"; 

function Book({movies}){
    const [bname , setName] = useState("")
    const [author , setAuthor] = useState("")
    const [pages , setPages] = useState("")
    const [isShow , setDetails] = useState(false)

    const [mname ,setMovie] = useState("")
    const [rate , setRate] = useState("")
    const [Genre , setGenre] = useState("")
    const [ishow , setShow ] = useState(false)
    const [isdetailshow , setMovieDetail] = useState(false)

    let selectmovie = movies.find(
        (p)=>p.mname.toLowerCase() === mname.toLowerCase()
    )
    return(
        <>

        {/* Book Library System */}
        <div className="small-box">

            <h3>Book Library</h3>
            
            <label>Book Name : </label>
            <input type="text" placeholder="Book Name" value={bname} onChange={(e)=>setName(e.target.value)}/><br />

            <label>Author : </label>
            <input type="text" placeholder="Author" value={author} onChange={(e)=>setAuthor(e.target.value)}/><br />

            <label>Pages : </label>
            <input type="number" value={pages} onChange={(e)=> setPages(e.target.value)} placeholder="Pages" /><br />


            <button onClick={()=> setDetails(!isShow)}>{isShow ? "Hide Details" : "Show Details"}</button>
            {isShow &&(
                <div className="small-card">
                    <h2>
                        {bname} <br />
                        {author} <br />
                        {pages} <br />
                        
                    </h2>

                    <h3>{pages >= 250 ?"Recommended" : "Not Recommended"}</h3>
                    

                </div>
            )}
        </div>




        {/* ----OTT Movie Dashboard---- */}
        <div className="small-box">
            <h3>OTT Moive Dashboard</h3><br />
            <hr /><br />
            <label>Movie Name : </label>
            <input type="text" placeholder="Movie Name " value={mname} onChange={(e)=>setMovie(e.target.value)} /> <br />

            <label>Rating : </label>
            <input type="number" placeholder="Rating"  value={rate} onChange={(e)=> setRate(e.target.value)}/> <br />

            <label>Genre : </label>
            <input type="text" placeholder="Genre" value={Genre} onChange={(e)=> setGenre(e.target.value)} />

            <h3>Total Movies : {movies.length}</h3>

            <button onClick={()=> setShow(!ishow)}>Show Movie</button>
            {
                ishow && (
                    <div className="small-card">
                    <h2>
                       {mname} <br /> <br />
                        Rating : {rate} <br />
                        Genre : {Genre}
                    </h2>

                    <h2 style={{color: "green"}}>{rate >= 9 ? "Blockbuster" : "Good Movie"}</h2>

                    <button onClick={()=> setMovieDetail(!isdetailshow)}>{isdetailshow ? "Hide Detals" : "Show Details"}</button> <br /> <br />

                    {
                        isdetailshow &&(
                            <div>
                                {selectmovie ? (
                                    <>

                                    <h2>ID : {selectmovie.id}</h2>
                                    <h2>Year : {selectmovie.year}</h2>
                                    <h2>Director : {selectmovie.director}</h2>

                                    </>
                                ) : (
                                    <h2>Not Found</h2>
                                )}
                            </div>
                        )
                    }

                </div>
                )
                
            }
        </div>




        {/* ----OTT Movie Dashboard---- */}
            <div className="small-box">
                <h3>Shopping Cart Dashboard</h3>
                

            </div>
        
        </>
    )
}

export default Book;
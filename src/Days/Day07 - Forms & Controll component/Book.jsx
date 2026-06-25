import { useState } from "react"; 

function Book(){

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
        (p)=>p.mname.toLowerCase() === mname.toLowerCase())

    const [pname , setProduct] = useState("")
    const [price , setPrice ] = useState("")
    const [Qty , setQty] = useState("")
    const [product , setproductdetail] = useState([])



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




        {/* ----Shopping Card---- */}
            <div className="small-box">
                <h3>Shopping Cart Dashboard</h3>
                <label>Product Name : </label>
                <input type="text" placeholder="Product Name" value={pname} onChange={(e)=>setProduct(e.target.value)} /> <br />

                <label>Price : </label>
                <input type="number" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} /> <br />

                <label>Quantity : </label>
                <input type="number" placeholder="Quantity" value={Qty} onChange={(e)=> setQty(e.target.value)} /> <br />

              
                <button onClick={() => setproductdetail([...product , {pname , price ,Qty}])}>Add Product</button>

                {
                    product.map((e)=> (
                        <div key={e} className="small-card">

                            <h4>Product: {e.pname}</h4>
                            <p>Price: ₹{e.price}</p>
                            <p>Quantity: {e.Qty}</p>
                            <p>Total Amount: ₹{e.price * e.Qty}</p>
                        </div>
                    ))
                }
            
            </div>

            
        
        </>
    )
}

export default Book;




// let players = [
//   {
//     id : 101 ,
//     name: 'rohit',
//     hourse_played : 340,
//     favorite_weapon : "Vandal",
//     country : "India" , 
//     joindate: "12-05-2023"
//   },
//   {
//     id : 102 ,
//     name:'dhoni',
//     hourse_played : 320,
//     favorite_weapon : "Vandal",
//     country : "USA" , 
//     joindate: "2-05-2023"
//   },
//   {
//     id : 103 ,
//     name :'virat',
//     hourse_played : 140,
//     favorite_weapon : "Vandal",
//     country : "Delhi" , 
//     joindate: "1-05-2025"
//   },
// ]

// let movies = [
//   {
//     id : 101,
//     year : 2021,
//     director : "Mohan Joshi",
//     mname : "QOT"
//   },
//   {
//     id : 102,
//     year : 2025,
//     director : "Raju Rastoji Joshi",
//     mname : "DoT's"

//   },
//   {
//     id : 103,
//     year : 2011,
//     director : "Mohan Joshi",
//     mname : "FIdda"

//   },
// ]
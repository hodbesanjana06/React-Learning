import { useState , useEffect} from "react";

function All(){

    function handleForm(e){
        console.log("handleForm called");
        e.preventDefault()

        const newBookObj = {
           id:Date.now() , bname , author , category , description
        }
        

        setAllBook([...books , newBookObj])

        setBookName("")
        setAuthor("")
        setCategory("")
        setDescription("")

        
        
    }

    function handleDelete(id){
        setAllBook(books.filter((b) => b.id !== id))      
    }

    function handleEdit(e){
        setBookName(e.bname)
        setAuthor(e.author)
        setCategory(e.category)
        setDescription(e.description)
        setEditID(e.id)
    }

    function handleUpdate(){
        console.log("handleUpdate called");
        setAllBook(books.map((e)=> e.id === editID ? {...e , bname , author , category , description}: e))    

    }

    const [books , setAllBook] = useState([])
    const [ApiBooks , setAPIBooks] = useState([])
    const [editID , setEditID] = useState(null)
    
    const [loading , setLoading] = useState(true)
    const [bname , setBookName] = useState("")
    const [author , setAuthor] = useState("")
    const [category , setCategory] = useState("")
    const [description , setDescription] = useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data)=>{
            setAPIBooks(data)
            setLoading(false)
        })
    },[])
    
    

    return (
        <>
         <div className="main-box">

            <h3>Book Library Manager</h3> 
            <hr />

            <form onSubmit={handleForm}>

                <h4>------Add New Book------</h4>

                <label>Book Title</label>
                <input type="text" value={bname} onChange={(e)=> setBookName(e.target.value)} /> <br />

                <label>Author</label>
                <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} /> <br />

                <label>Category </label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="">select category</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Self Help">Self Help</option>
                    <option value="History">History</option>
                    <option value="Programming">Programming</option>

                </select> <br />

                <label>Description</label>
                <textarea value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>

                {
                    editID ? (
                        <button type="button" onClick={handleUpdate}>Update Book</button>
                    ):(
                        <button type="submit">Add Book</button>
                    )

                }
            </form>
            <hr />
                <h3>API Books</h3>
                    <div className="api-container">
                         {
                            loading ? <h2>data loading </h2>:ApiBooks.slice(0,5).map((b)=>(
                                <div className="api-card" key={b.id}>
                                    <h2>{b.title}</h2>
                                    <p>{b.body}</p>
                                </div>
                                ))
                          }
                    </div>
                <hr />
                <h3>My Books </h3>
                
                <div className="books-container">

                    {
                    books.map((e)=>(
                        
                            <div className="book-card" key={e.id}>
                                <h2>{e.bname}</h2>
                                <p><strong>Author : </strong>{e.author}</p>
                                <p><strong>Category:</strong> {e.category}</p>
                                <p><strong>Description:</strong> {e.description}</p>
                                <div className="btn-group">
                                    <button type="button" onClick={()=> handleDelete(e.id)}>Delete</button> <br />
                                    <button type="button" onClick={()=> handleEdit(e)}>Edit</button>
                          
                                </div>
                            </div>
                        
                    ))
                }

                </div>


         </div>
        
        </>
    )
}

export default All;




/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #f4f6f9;
}

.main-box {
  width: 95%;
  max-width: 1200px;
  margin: 30px auto;
}

.main-box h3 {
  text-align: center;
  color: #2c3e50;
  margin: 20px 0;
  font-size: 28px;
}

hr {
  margin: 30px 0;
  border: none;
  border-top: 1px solid #ddd;
}


form {
  width: 100%;
  max-width: 700px;
  margin: auto;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
}

form h4 {
  text-align: center;
  margin-bottom: 20px;
  color: #444;
}

form label {
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: bold;
}

form input,
form select,
form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 6px;
  outline: none;
  font-size: 15px;
}

form textarea {
  height: 120px;
  resize: none;
}

form input:focus,
form select:focus,
form textarea:focus {
  border-color: #3498db;
}

form button {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border: none;
  background: #3498db;
  color: white;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

form button:hover {
  background: #217dbb;
}


.api-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.api-card {
  background: white;
  padding: 18px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,.08);
  transition: .3s;
}

.api-card:hover {
  transform: translateY(-5px);
}

.api-card h2 {
  font-size: 20px;
  color: #2c3e50;
  margin-bottom: 10px;
}

.api-card p {
  color: #555;
  line-height: 1.5;
}


.books-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 20px;
}


.book-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 15px rgba(0,0,0,.1);
  transition: .3s;
  position: relative;
}

.book-card:hover {
  transform: translateY(-8px);
}

.book-card h2 {
  color: #2c3e50;
  margin-bottom: 15px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 8px;
}

.book-card p {
  margin: 10px 0;
  color: #555;
  line-height: 1.5;
}

.book-card strong {
  color: #222;
}


.btn-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
}

.btn-group button {
  flex: 1;
  border: none;
  padding: 10px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: .3s;
  font-size: 15px;
}

.btn-group button:first-child {
  background: #e74c3c;
}

.btn-group button:first-child:hover {
  background: #c0392b;
}

.btn-group button:last-child {
  background: #2ecc71;
}

.btn-group button:last-child:hover {
  background: #27ae60;
}


@media (max-width:768px) {

  form {
    padding: 18px;
  }

  .btn-group {
    flex-direction: column;
  }

  .book-card,
  .api-card {
    padding: 16px;
  }
} */
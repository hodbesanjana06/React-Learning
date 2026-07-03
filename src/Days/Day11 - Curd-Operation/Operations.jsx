import { useState } from "react";

function Operation(){

    function handleForm(e){
        e.preventDefault()

        const newobj = {
           id, name , age
        }
        setStudents([...students, newobj])
        
        setId("")
        setName("")
        setAge("")
        
    }
    function handleDelete(id){
        setStudents(students.filter((student)=> student.id !== id))
    }

    function handleEdit(e){
        setName(e.name)
        setAge(e.age)

        setEditId(e.id)
    }

    function handleUpdate(){
        setStudents(students.map((e)=> e.id === editId ? {...e, name , age}: e))
        
    }
    const [students , setStudents] = useState([])
    const [id , setId] = useState("")
    const [name , setName ] = useState("")
    const [age , setAge] = useState("")
    const [editId ,setEditId] = useState(null)
    const [search ,setSearch] = useState("")
    const [filterAge , setFilterAge] = useState("ALL")
    const [sortdata , setorderData] = useState("A-Z")

    return(
        <>
            <div className="small-box">
                
                <form onSubmit={handleForm}>
                    <label>Student ID </label>
                    <input type="number" value={id} onChange={(e)=> setId(e.target.value)} /> <br />

                    <label>Name </label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br />

                    <label>Age </label>
                    <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} /> <br />
                    {
                        editId ? (
                            <button type="button" onClick={handleUpdate}> Update Student</button>
                        ):(
                            <button type="submit">Add Student</button>
                        )
                    }
                    
                    <label>Search student</label>
                    <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />

                    <label>filter age</label>
                    <select value={filterAge} onChange={(e)=>setFilterAge(e.target.value)}>
                        <option value="ALL">ALL</option>    
                        <option value="18">18</option>
                        <option value="21">21</option>
                        <option value="30">30</option>
                    </select>                    
                    
                    <label>Sort Data</label>
                    <select value={sortdata} onChange={(e)=>setorderData(e.target.value)}>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>

                    </select>
                    <hr />


                    {
                        students.length === 0 ? (
                            <h3>No Student Yet</h3>
                        ) : (
                            [...students]
                            .filter((e)=>
                                e.name.toLowerCase().includes(search.toLowerCase())
                            )
                            .filter((e)=> filterAge === "ALL" ? true : e.age === filterAge)
                            .sort((a,b)=> sortdata === "A-Z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
                            .map((e)=>(
                                <div key={e.id} className="small-card">  
                                    <h3>

                                        name : {e.name} <br />
                                        age : {e.age} <br />
                                    </h3>
                                    <button type="button" onClick={()=> handleDelete(e.id)}>Delete</button> <br /> <br />
                                    <button type="button" onClick={()=> handleEdit(e)}>Edit</button> <br /> <br />
                                    
                                </div>
                        ))
                        )
                    }

                </form>

            </div>
        </>
    )
}
export default Operation;
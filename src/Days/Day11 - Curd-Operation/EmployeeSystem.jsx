import { useState } from "react";

function EmployeeSystem(){

    function handleForm(e){
        e.preventDefault()
        const newEmpObj ={
            ename , eid , age , dept
        }
        setEmployee([...emp , newEmpObj])

    }

    function handleDelete(eid){
        setEmployee(emp.filter((empl)=> empl.eid  !== eid))
    }

    function handleEdit(e){
        setName(e.ename)
        setId(e.eid)
        setAge(e.age)
        setDepartment(e.dept)
        setEditID(e.eid)

        setId("")
        setName("")
        setAge("")
        setDepartment("")
        setEditID(null)
    }

    function handleUpdate(){
        setEmployee(emp.map((e)=> e.eid == editID ? {...e, ename ,age ,dept}: e))
        
    }

    const [emp , setEmployee] = useState([])
    const [eid , setId] = useState("")
    const [ename , setName] = useState("")
    const [age , setAge] = useState("")
    const [dept , setDepartment] = useState("")

    const [editID , setEditID] = useState(null)
    const [search , setSearch] = useState("")
    const [filterDept ,setFilterDept] = useState("All")
    const [sortEmp , setSortEmp] = useState("A-Z")

    return(
        <>
            <div className="main-box">
                <h3>Employee Management System</h3><br />
                <hr />

                <form onSubmit={handleForm}>
                    <label>Employee ID </label>
                    <input type="number" value={eid}  onChange={(e)=>setId(e.target.value)}/>  <br /> 

                    <label>Name</label>
                    <input type="text"  value={ename} onChange={(e)=>setName(e.target.value)}/> <br />

                    <label>Age</label>
                    <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} /> <br />

                    <label>Department  </label>
                    <select value={dept} onChange={(e)=> setDepartment(e.target.value)}>
                        <option value="">select dept</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                    </select> <br /> <br />

                    {
                        editID ? (
                            <button type="button" onClick={handleUpdate}>Update Employee</button> 
                        ) :(
                            <button type="submit">Add Employee</button> 
                        )
                    } <br />

                   <hr /> <br /> 

                    <label>Search Employee </label>
                    <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />

                    <label>Filter Department </label>
                    <select value={filterDept} onChange={(e)=> setFilterDept(e.target.value)}>
                        <option value="All">All</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                    </select> <br /><br />
                   
                   <label>Sort</label>
                   <select value={sortEmp} onChange={(e)=> setSortEmp(e.target.value)} >
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>

                   </select>
                </form>
                    {
                        [...emp]
                        .filter((s)=> s.ename.toLowerCase().includes(search.toLowerCase()))     
                        .filter((d)=> filterDept === "All" ? true : d.dept === filterDept)     
                        .sort((a,b)=> sortEmp === "A-Z" ? a.ename.localeCompare(b.ename) : b.ename.localeCompare(a.ename))         
                        .map((e)=>(
                            <div className="small-card" key={e.eid}>
                                <h3>
                                    ID : {e.eid} <br />
                                    Name : {e.ename} <br />
                                    Age : {e.age} <br />
                                    Department : {e.dept} <br />
                                </h3>

                                <button onClick={()=> handleDelete(e.eid)}>Delete</button> <br /> <br />
                                <button onClick={()=> handleEdit(e)}>Edit</button> <br />
                            </div>
                        ))
                    }
            </div>

        </>
    )
}

export default EmployeeSystem;



/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body{
    background: #f2f4f8;
    padding: 30px;
}

.main-box{
    width: 90%;
    max-width: 600px;
    margin: 30px auto;
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}
.main-box h3{
    text-align: center;
    font-size: 28px;
    margin-bottom: 15px;
    color: #333;
}

form{
    display: flex;
    flex-direction: column;
    gap: 12px;
}

label{
    font-weight: bold;
    color: #444;
}

input,
select{
    width: 100%;
    padding: 10px;
    border: 1px solid #bbb;
    border-radius: 6px;
    font-size: 16px;
}

input:focus,
select:focus{
    outline: none;
    border-color: royalblue;
}

button{
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    margin-top: 5px;
}

button[type="submit"]{
    background: royalblue;
    color: white;
}

button[type="submit"]:hover{
    background: #184bb8;
}

button[type="button"]{
    background: seagreen;
    color: white;
}

button[type="button"]:hover{
    background: #187a47;
}

hr{
    margin: 20px 0;
}

.small-card{
    margin-top: 20px;
    background: #f8f8f8;
    border-left: 5px solid royalblue;
    padding: 18px;
    border-radius: 8px;
    box-shadow: 0 3px 8px rgba(0,0,0,.1);
}

.small-card h3{
    text-align: left;
    font-size: 18px;
    line-height: 1.8;
    color: #333;
}

.small-card button{
    margin-right: 10px;
    margin-top: 12px;
}

.small-card button:first-of-type{
    background: crimson;
}

.small-card button:first-of-type:hover{
    background: darkred;
}

.small-card button:last-of-type{
    background: orange;
    color: white;
}

.small-card button:last-of-type:hover{
    background: darkorange;
} */
import { useState } from "react";

function Form(){
    const [name , setName] = useState("")
    const [age , setAge] = useState("")
    const [mail , setEmail] = useState("")
    const [fname , setFirstName] = useState("")
    const [lname , setLastName] = useState("")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [isLogin , setShow] = useState(false)

    const [isLight , setTheme] = useState(false)
    const [ename , setEName] = useState("")
    const [eage , setEAge] = useState("")
    const [dept , setDept] = useState("")
    const [salary , setSalary ] = useState("")
    const [add , AddEmp] = useState([])
    const [isShow , setDetails] = useState(false)

    return(
        <>
        
        <div className="small-box">
            <h3>combine Input</h3>
            <input type="text" placeholder ="Enter Name" value={name} onChange={(e)=>(setName(e.target.value))} />
            <input type="number" placeholder="Enter Age" value={age} onChange={(e)=>(setAge(e.target.value))}/>
            <input type="email" placeholder="Enter Email" value={mail} onChange={(e)=>(setEmail(e.target.value))} />
            <h2>
                Name : {name} <br />
                Age : {age} <br />
                Email : {mail}

            </h2>
            
        </div>

        <div className="small-box">
              <h3>multiple Input </h3>
              <input type="text" placeholder="Enter First Name" value={fname} onChange={(e)=>(setFirstName(e.target.value))} /> <br />
              <input type="text" placeholder="Enter Last Name" value={lname} onChange={(e)=>{setLastName(e.target.value)}} /> <br />
              <h2>Full Name : {fname } {lname}</h2>
              <p>Welcome {fname}</p>

        </div>

        <div className="small-box">
            <h3>Login Demo</h3>
            <input type="text" placeholder="Username " value={username} onChange={(e)=>(setUsername(e.target.value))} /> <br />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>(setPassword(e.target.value))} /> <br />
            <button onClick={()=>setShow(true)}>Login</button>
            {isLogin && (
                <h2>
                    Username : {username} <br />
                    Password : {password}
                </h2>
            )}
        </div>



        <div className="small-box">

            <h3>Employee Dashboard</h3>
            <h2>Theme : {isLight ? "Dark" : "Light"}</h2>
            <button onClick={()=> setTheme(!isLight)}>Toggle Theme </button> <br /><br />
            <hr />


            Name : <input type="text" placeholder="Name" value={ename} onChange={(e)=>setEName(e.target.value)}/> <br />
            Age  : <input type="number" placeholder="Age" value={eage} onChange={(e)=>setEAge(e.target.value)} />
            Department : <input type="text" placeholder="Department" value={dept} onChange={(e)=>setDept(e.target.value)}/>
            salary : <input type="number" placeholder="Salary" value={salary} onChange={(e)=>setSalary(e.target.value)}/>

            <button onClick={()=> AddEmp([...add , {ename , eage , dept , salary}])}>Add Employee</button>


            <h2>Total Employee : {add.length}</h2>


            <button onClick={()=>setDetails(!isShow)}>{isShow ? "Hide Details " : "Show Details"}</button>
            {isShow &&(
                <div >
                    {
                        add.map((e)=>(
                            <div key={e} className="small-card">
                                 <h2>Name : {e.ename}</h2>
                                <h2>Age : {e.eage}</h2>
                                <h2>Department : {e.dept}</h2>
                                <h2>Salary : {e.salary}</h2>
                            </div>
                        ))
                    }

                </div>
            )}
        </div>
        
        </>
    )
}

export default Form;
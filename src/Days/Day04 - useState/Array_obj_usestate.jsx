
import { useState } from "react";

function Array_obj_usestate(){

    const [obj , setName] = useState({
        Name : 'sanjana',
        age : 23
    })

    const [student , setStudent ] = useState({
        sname : 'Sanajan',
        sage : 22, 
        city : 'Pune',
        role : 'Frontend developer'
    })

    const [mix , setAll] = useState([
        {
            id : 101,
            ename : 'Rahul'

        },
        {
            id : 102,
            ename : 'Aman'
        }

    ])

    const [user , setUser] = useState({
        Ename : 'Sanjana',
        Eage : 23,
        Ecity : 'Pune'
    })

    const [skills , setskills] = useState(['React', "HTML"])

    const [color , Addcolor] = useState(['Red', 'Blue'])

    const [food , addFood] = useState(['Milk', 'Bread'])

    const [lang , setLanguage] = useState(['React', 'Javascript']) 

    

    return(
        <>
            

            <div className="small-box">
                <h3>Example : Array usestate</h3>

                {color.map((e)=>(<h2>{e}</h2>))}
                <button onClick={()=> Addcolor([...color , "Green"])}>Add Green</button>
                <button onClick={()=> Addcolor(color.slice(0 ,-1))}>Remove Last</button>
                <button onClick={()=> Addcolor(color.filter( c => c !== 'Blue'))}>Remove Blue</button>
            </div>

            <div className="small-box">
                <h3>Example : Array usestate</h3>

                {food.map((i)=>(<h2>{i}</h2>))}
                <button onClick={()=> addFood([...food , 'Eggs'])}>Add Eggs</button>
                <button onClick={()=> addFood([...food , 'Butter'])}>Add Butter</button>
            </div>

            <div className="small-box">
                <h3>Example : Array usestate</h3>

                {lang.map((i)=>(<h2>{i}</h2>))}
                <button onClick={()=> setLanguage([...lang , 'CSS'])}>Add CSS</button>
                <button onClick={()=> (setLanguage(lang.filter(i => i !== 'CSS')))}>Remove CSS</button>
            </div>

            {/* ---------------------objebct --------------- */}

            <div className="small-box">
                <h3>Example : Object usestate</h3>
                <h2>Name : {obj.Name}</h2>
                <h2>Age : {obj.age}</h2>
                <button onClick={()=> setName({...obj, Name : obj.Name = "Rahul"})}>Change Name</button>
                <button onClick={()=> setName({...obj , age : obj.age + 1})}>Increase Age</button>
            </div>

            <div className="small-box">
                    <h3>Object : Add Age / change Name </h3>
                    <h2>Age : {student.sage}</h2>
                    <h2>Name: {student.sname}</h2>
                    <h2>City: {student.city}</h2>
                    <h2>Role: {student.role}</h2>


                    <button onClick={()=> setStudent({...student, sage : student.sage + 1})}>Increase Age</button>
                    <button onClick={()=> setStudent({...student , sname : student.sname = 'Radha'})}>change name </button>
                    <button onClick={()=> setStudent({...student, city : student.city = 'Mumbai'})}>Move to Mumbai</button>
                    <button onClick={()=> setStudent({...student , role : student.role = 'Senior Frontend Developer' })}>Pramote</button>
            </div>

            <div className="small-box">
                <h3>Object : Mix Array + Objejct</h3>
                {mix.map((e)=>(<h2>{e.ename }  : {e.id}</h2>))}
                <button onClick={()=> setAll([...mix , {id : 103, ename : 'Chaman'}])}>Add Chaman</button>
                <button onClick={()=> setAll(mix.filter(e => e.ename !== 'Chaman'))}>Remove Chaman</button>
            </div>
        {/* --------------Combine All --------------------- */}
            <div className="small-box">
                <h3>Profile Manager</h3>
                <h2>Name : {user.Ename}</h2>
                <h2>Age : {user.Eage}</h2>
                <h2>City : {user.Ecity}</h2><br /><br />
                {skills.map((e)=>(<h2>{e}</h2>))}

                <button onClick={()=> setUser({...user , Eage : user.Eage + 1})}>Increase Age</button>
                <button onClick={()=> setUser({...user , Ename : user.Ename = 'Champachameli'})}>Chnage Name </button>
                <button onClick={()=> setUser({...user , Ecity : user.Ecity = "Vrindavan"})}>Change City</button>

                <button onClick={()=>setskills([...skills , 'CSS'])}>Add CSS</button>
                <button onClick={()=> setskills(skills.slice(0 , -1))}>Remove Last Skill</button>
            </div>
        </>
    )
}

export default Array_obj_usestate;
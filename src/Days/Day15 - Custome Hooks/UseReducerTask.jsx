import { useState, useReducer, act } from "react";


 const initialState ={
        name : "Rahul",
        dept : "HR",
        salary : 30000,
        theme : "Light",
    }

function reducer(state , action){
    if(action.type === "Increment"){
        return state = state + action.payload
    }
    if(action.type === "Decrement"){
        return state = state - action.payload
    }
    if(action.type === "Reset"){
        return 0
    }
    return state;
}

function empReducer(state , action){
    if(action.type === "changeName"){
        return {...state , name : action.payload}
    }
    if(action.type === "changeDept"){
        return {...state , dept : action.payload}
    }
    if(action.type === "Increase"){
        return {...state , salary : state.salary + action.payload}
    }
    if(action.type === "Reset"){
        return initialState;
    }
    if(action.type === "changeTheme"){
        return {...state, theme : action.payload }
    }
    return state
}

function productReducer(state, action){
    if(action.type === "AddProduct"){
        return [...state , {
            id : Date.now(),
            txt : action.payload
        }]
    }

    if(action.type === "deleteproduct"){
        return state.filter((f)=> f.id !== action.payload)
    }
}

function expenceReducer(state, action){
    if(action.type === "AddProduct"){
        return [...state , {
            id : Date.now(),
            expence : action.payload.expence,
            amt : action.payload.amt,
        }]
    }

    if(action.type === "deleteExpence"){
        return state.filter((exp)=> exp.id !== action.payload)
    }


}

// -------------------------------------------------
function UseReducerTask(){
    const [expence , setExpence] = useState("")
    const [amt , setAmt] = useState("")
    const [expenceTracker , expenceDispatch] = useReducer(expenceReducer , []);
    const [txt , setTxt] = useState("")
    const [product , productDispatch] = useReducer(productReducer , []);
    const [employee , empDispatch] = useReducer(empReducer , initialState);
    const [balance , dispatch] = useReducer(reducer , 0)
    return(
        <>
            <div className="container">
                <div className="small-card">
                    <h2>Initial Balance : {balance}</h2>

                    <button onClick={()=> dispatch({
                        type : "Increment",
                        payload : 100
                    })}>+100</button>

                    <button onClick={()=> dispatch({
                        type: "Increment",
                        payload : 500
                    })}>+500</button>

                    <button onClick={()=> dispatch({
                        type : "Decrement",
                        payload : 100
                    })}>-100</button>

                    <button onClick={()=> dispatch({
                        type: "Decrement",
                        payload : 500
                    })}>-500</button>

                    <button onClick={()=> dispatch({
                        type : "Reset"
                    })}>Reset Balance</button>
                </div><hr /> <br />


                <div className="small-card">
                    <h2>Employee Profile</h2>
                    <h3>
                        Name : {employee.name} <br />
                        Department : {employee.dept} <br />
                        Salary : {employee.salary} <br />
                        Mode : {employee.theme} 
                    </h3>

                    <button onClick={()=> empDispatch({
                        type : "changeName",
                        payload : "Chanda"
                    })}>Change Name</button>

                    <button onClick={()=> empDispatch({
                        type : "changeDept",
                        payload : "Marketing"
                    })}>Change Department</button>

                    <button onClick={()=> empDispatch({
                        type: "Increase",
                        payload : 10000
                    })}>Increase by 10000</button>


                    <button onClick={()=> empDispatch({
                        type : "Reset"
                    })}>Reset</button>

                    <button onClick={()=> empDispatch({
                        type : "changeTheme",
                        payload:"Dark"
                    })}>Toggle Button</button>
                </div> <hr /> <br />


                <div className="small-card">
                    <input type="text" value={txt} onChange={(e)=> setTxt(e.target.value)} /> 
                    <button onClick={()=> productDispatch({
                        type: "AddProduct",
                        payload : txt
                    })}>Add Product</button>

                    {
                        product.map((p, index)=>(
                            <>
                                <h3 key={index}>{p.txt}</h3>
                                <button onClick={()=> productDispatch({
                                    type : "deleteproduct",
                                    payload : p.id
                                })}>delete Product</button>
                            </>
                        ))
                    }
                    <hr /> <br /> <br />

                    <div className="small-card">
                        <h2>Expene Tracker</h2>
                        <input type="text" value={expence} onChange={(e)=> setExpence(e.target.value)} placeholder="Expence Name" /> <br />
                        <input type="number" value={amt} onChange={(e)=> setAmt(e.target.value)} placeholder="price"/> <br />
                        <button onClick={()=> expenceDispatch({
                            type : "AddProduct",
                            payload : {amt,expence},
                        })}>Add Expence</button>


                        {
                            expenceTracker.map((m, index)=>(
                                <>
                                    <h3 key={index}>{m.expence}  {m.amt} </h3>
                                    <button onClick={()=> expenceDispatch({
                                        type : "deleteExpence",
                                        payload : m.id
                                    })}>delete</button>
                                    
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default UseReducerTask;
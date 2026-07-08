import { useReducer, useState } from "react";

function reducer(state , action){
    if(action.type === "AddTodo"){
        return [...state , {id : Date.now(),txt : action.payload}]
    }
    if(action.type === "deleteTodo"){
        return state.filter((todo)=> todo.id !== action.payload)
    }
    return state

}

function Todo(){
    const [txt , setTxt] = useState("")
    const[todo , dispatch] = useReducer(reducer , [])

    return(
        <>
            <div className="container">
                <h2>hello</h2>

                <input type="text" value={txt} onChange={(e)=> setTxt(e.target.value)}/> <br />
                <button onClick={()=> dispatch({
                    type : "AddTodo", 
                    payload : txt,
                }) }>Add Text</button> 
                <hr />

                {
                    todo.map((e,index)=>(
                        <>
                            <h2 key={index}>{e.txt}</h2>
                            <button onClick={()=>
                                dispatch({
                                    type : "deleteTodo",
                                    payload : e.id
                                })
                            }>Delete</button>
                        </>
                    ))
                }
            </div>
        
        </>
    )
}
export default Todo;
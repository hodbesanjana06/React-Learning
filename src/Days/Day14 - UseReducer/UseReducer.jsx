import { act, useReducer } from "react";

const initialState = {
        name : "Sanjana",
        age : 23,
        course : "python"
    }

function reducer(state , action){
    if(action.type === "namechange"){
        return {...state , name : action.payload}
    }
    if(action.type === "changeAge"){
        return {...state , age : state.age + 1}
    }
    if(action.type === "changecourse"){
        return {...state , course : action.payload}
    }
    if(action.type === "Reset"){
        return initialState
    }
    return state;
}

function UseReducer(){
    
    const [student , dispatch] = useReducer(reducer ,initialState )
    return(
        <>
           <h2>usereduce with object</h2>
            <h3>
                Name : {student.name} <br />
                Age : {student.age} <br />
                Course : {student.course}
            </h3>

            <button onClick={()=> dispatch({
                type : "namechange",
                payload : "disha"
            })}>CHange name</button>

            <button onClick={()=> dispatch({
                type : "changeAge",
                
            })}>Change Age </button>

            <button onClick={()=> dispatch({
                type : "changecourse",
                payload : "React"
            })}>Change Course</button>

            <button onClick={()=> dispatch({
                type : "Reset"
            })}>Reset</button>

        </>
    )
}
export default UseReducer;
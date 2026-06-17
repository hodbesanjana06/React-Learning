import { useState } from "react";


function UseState(){
    const [count, ChangeCount]= useState(0)
    const [name , changeName]= useState('sanjana')
    const [isOn , setIsOn] = useState(false)
    const [fruits , setFruit] = useState(['apple', 'banana', 'mango'])
    const [obj , objset]= useState({
        name : 'sanjana',
        age : 23
    })
    return(
        <>
            <h2>{count}</h2>
            <button onClick={()=> ChangeCount( count + 1)}>+</button>
            <button onClick={()=> ChangeCount( count - 1)}>-</button>
            <hr />

            <h3>{name}</h3>
            <button onClick={()=> changeName('Radha')}>Chnage Name </button>

            <hr />
            <h3>{isOn ? "On": "OFF"}</h3>
            <button onClick={()=> setIsOn(!isOn)}>Toggle</button>


            <hr />
                {
                fruits.map((f) => 
                    <p>{f}</p>
                )}

            <hr />
                <h3>{obj.name}</h3>



        </>
    )
}
export default UseState;

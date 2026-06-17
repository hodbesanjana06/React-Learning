import { useState } from "react";
import UseState from "./useSate";

function Task(){
    const [c , setCount] = useState(0)
    const [c2 , changeCount] = useState(0)
    const [name , changeName]= useState('Sanjana')
    const [isOn , chnageToogle] = useState(false)
    const [txt , setText] = useState(true)
    const [balance , changeBalance] = useState(1000)
    const [color , setColor] = useState('Red')

    let quotes = ['hare Krishna Hare Krishna', 'Radhe Radhe', 'Be Positive', 'Krishna Bhagvan Bless U']
    const [quote , changeQuote]= useState(quotes[0])

    let roles = ['User', 'Admin','Super Admin']
    const [role , changeRole]= useState(roles[0])

    const [fruits, setFruits] = useState(['Apple', 'Mango']);

    const [like , setLike] = useState(0)
    const [dislike , setDislike] = useState(0)

    let traffic = ['🔴','🟡','🟢']
    const [t , changeTraffic]= useState(traffic[0])


    const [team1 , ScoreA]= useState(0)
    const [team2 , ScoreB]= useState(0)

    return(
        <>
        
                <h2 className="heading">Usestate Examples </h2>

                <div className="main-box">

                    <div className="small-box">
                        <h2>Task 1 : Counter</h2>
                        <h3> 🩷 Likes {c}</h3>
                        <button className="button1" onClick={()=> setCount(c + 1)}>Count</button>
                    </div>


                    <div className="small-box">
                        <h2>Task 2 : Age Counter</h2>
                        <h3>{c2}</h3>
                        <button className="button1" onClick={()=> changeCount(c2 + 1)}>Increas</button>
                        <button className="button1" onClick={()=> changeCount(c2 - 1)}>Decrease</button>
                    </div>
                    
                    
                    <div className="small-box">
                        <h2>Task 3 : Name Changer</h2>
                        <h3>{name}</h3>
                        <button className="button1" onClick={()=> changeName('RadhaRani')}>Chnage Name</button>
                    </div>


                    <div className="small-box">
                        <h2>Task 4 : Toogle</h2>
                        <h3>{isOn ? 'ON': "OFF"}</h3>
                        <button className="button1" onClick={()=> chnageToogle(!isOn)}>Toogle</button>
                    </div>


                    <div className="small-box">
                        <h2>Task  5 : Show/Hide Text</h2>
                        <h3>{txt?'Welcom to React' : ''}</h3>
                        <button className="button1" onClick={()=> setText((!txt))}>Toogle</button>
                    </div>

                    <div className="small-box">
                        <h2>Task  6 : Bank Balance</h2>
                        <h3> ₹{balance}</h3>                      
                        <button className="button1" onClick={()=> changeBalance(balance + 500)}>Deposit ₹500</button>
                        <button className="button1" onClick={()=> changeBalance(balance - 500)}>Withdaw ₹500</button>
                    </div>


                    <div className="small-box">
                        <h2>Task  7 : Color Changer</h2>
                        <h3>Current Color : {color}</h3>                      
                        <button className="button1" onClick={()=> setColor('Blue')}>Blue</button>
                        <button className="button1" onClick={()=> setColor('Green')}>Green</button>
                        <button className="button1" onClick={()=> setColor('Yellow')}>Yellow</button>
                    </div>
                    


                    <div className="small-box">
                        <h2>Task 8: Quote Generator </h2>
                        <h3>{quote}</h3>    
                        <button className="button1" onClick={()=> changeQuote(quotes[Math.floor(Math.random() * quotes.length)])}>Next</button>
                    </div>


                     <div className="small-box">
                        <h2>Task 9: User Role Switcher </h2>
                        <h3>{role}</h3>    
                        <button className="button1" onClick={()=> changeRole(roles[Math.floor(Math.random() * roles.length)])}>Next</button>
                    </div>


                    <div className="small-box">
                        <h2>Task 10: Add Fruits </h2>
                        <h3>{fruits.join(', ')}</h3>                        

                        <button className="button1"
                        onClick={() => {
                            if (!fruits.includes('Orange')) {
                            setFruits([...fruits, 'Orange']);
                            }
                        }}
                        >
                        Add Orange
                        </button>
                    </div>


                    <div className="small-box">
                        <h2>Task 11: Like/Dislike System </h2>
                        <h2 onClick={()=> setLike(like + 1)}>👍{like}</h2>
                        <h2 onClick={()=> setDislike(dislike + 1)}>👍{dislike}</h2>    
                    </div>


                    <div className="small-box">
                        <h2>Task 12: Traffic Light </h2>
                        <h1>{t}</h1>    
                        <button className="button1" onClick={()=> changeTraffic(traffic[Math.floor(Math.random() * traffic.length)])}>Next</button>
                    </div>

                    <div className="small-box">
                        <h2>Task 13: Team Scoreboard </h2>
                        <h3>Team A : {team1} | Team B : {team2}</h3>
                        <button  className="button1" onClick={()=> ScoreA(team1 + 1)}>A +1</button>
                        <button className="button1" onClick={()=> ScoreB(team2 + 1)}>B +1</button>
                        <button className="button1" onClick={() => { ScoreA(0); ScoreB(0);}}>Reset</button>

                    </div>
                </div>
                
        </>
    )
}

export default Task;
import { useState , useEffect } from "react";

function GamerProfile(){

    function handleGameForm(e){
        e.preventDefault()
        setPlayers([...players, {name , age , email , games , rank , skills , about }])
        reset()
        
    }

    function handleSkills(e){
        const skill = e.target.value;
        const checked = e.target.checked;

        if(checked){
            setSkills([...skills , skill])
        }else{
            setSkills(skills.filter((s)=> s !== skill))
        }
    }

    function reset(){
        setName("")
        setAge("")
        setEmail("")
        setGames("")
        setRank("")
        setSkills([])
        setAbout("")
    }

    const [isDark , setIsDark] = useState(false)
    const [name , setName] = useState("")
    const [age , setAge] = useState("")
    const [email , setEmail] = useState("")
    const [games , setGames] = useState("")
    const [rank , setRank] = useState("")
    const [skills , setSkills] = useState([])
    const [about , setAbout] = useState("")
    const [condition , setCondition ] = useState("")
    const [players , setPlayers] = useState([])

    const [isShow , setDetails] = useState(false)
    const [search , setSearch] = useState("")

    const [isSee , setSee]= useState(false)
    
    
    const searchplayer = players.filter((p)=> p.name.toLowerCase().includes(search.toLowerCase()))
  

    return(
        <>
            <div className={`main-box ${isDark ? "Dark": "light"}`}>
                <h2>Game Profile Hub (Day 1 to Day 09 Topics)</h2>

                <h3>Theme : {isDark ? "Dark" : "Light"}</h3>
                <button onClick={()=>setIsDark(prev => !prev)}>Toggle Theme</button> <hr />

                <form onSubmit={handleGameForm}>
                    <label>Player Name </label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br />

                    <label>Age </label>
                    <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} /> <br />

                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />

                    <label>Favorite Game </label>
                    <select value={games} onChange={(e)=>setGames(e.target.value)}>
                        <option value="Valorant">Valorant</option>
                        <option value="BGMI">BGMI</option>
                        <option value="Minecraft">Minecraft</option>
                        <option value="CS2">CS2</option>
                    </select> <br />

                    <label>Rank </label>
                    <input type="radio" value="Bronze" onChange={(e)=>setRank(e.target.value)} checked={rank === "Bronze"} /> Bronze
                    <input type="radio" value="Silver" onChange={(e)=>setRank(e.target.value)} checked={rank === "Silver"} /> Silver
                    <input type="radio" value="Gold" onChange={(e)=> setRank(e.target.value)} checked={rank === "Gold"} /> Gold 
                    <input type="radio" value="Diamond" onChange={(e)=> setRank(e.target.value)} checked={rank === "Diamond"} /> Diamond <br />

                    <label>Skills </label>
                    <input type="checkbox" value="Sniper" onChange={handleSkills} checked={skills.includes("Sniper")} /> Sniper 
                    <input type="checkbox" value="Strategy" onChange={handleSkills} checked={skills.includes("Strategy")} /> Strategy 
                    <input type="checkbox" value="Team Player" onChange={handleSkills} checked={skills.includes("Team Player")}/> Team Player 
                    <input type="checkbox" value="Fast Reflex" onChange={handleSkills} checked={skills.includes("Fast Reflex")} /> Fast Reflex <br />

                    <label>About Player</label>
                    <textarea value={about} onChange={(e)=> setAbout(e.target.value)}></textarea>


                    <hr /> <br />
                    <button type="submit" >Register Player</button>

                    <hr />

                    <h3>Total Players : {players.length}</h3>
                    <label>Search Player </label>
                    <input type="search" value={search} onChange={(e)=> setSearch(e.target.value)} />

                    <button type="button" onClick={(e)=> setDetails(!isShow)}>{isShow ? "Hide Players " : "Search Players"}</button>
                    {
                        isShow && (
                            searchplayer.length > 0 ? (
                            searchplayer.map((p, index) => (
                                <div className="small-card" key={index}>
                                    <h2>{p.name}</h2>
                                    <h4>
                                        Age : {p.age} <br />
                                        Email : {p.email} <br />
                                        Game : {p.games} <br />
                                        Rank : {p.rank} <br />
                                        about : {p.about}
                                    </h4>
                                    <p>
                                        Skills : {p.skills.map((s, i) => (
                                        <span key={i} style={{ marginLeft: "6px" }}>
                                            {s}
                                        </span>
                                        ))}
                                    </p>
                                    
                                </div>
                            ))
                            ) : (
                            <h4>Not found</h4>
                            )
                        )
                    }
                    
                    <button type="button" onClick={()=>setSee(!isSee)}>{isSee ? "Hide details " : "See Details "}</button>
                    {
                        isSee &&(
                            players.map((p, index)=>(
                                <div className="small-card" key={index}>
                                    <h2>{p.name}</h2>
                                    <h4>
                                        Age : {p.age} <br />
                                        Email : {p.email} <br />
                                        Game : {p.games} <br />
                                        Rank : {p.rank} <br />
                                        about : {p.about}
                                    </h4>
                                    <p>Skills : {p.skills.map((s, i)=> <span key={i} style={{marginLeft:"6px"}}>{s}</span>)} </p>
                                </div>
                            ))
                        )
                    }

                </form>

            </div>
        </>
    )
}

export default GamerProfile;




// .light {
//     background: #f8fafc;
//     color: #0f172a;
// }

// .Dark {
//     background: #0f172a;
//     color: #e2e8f0;
// }

// .light input,
// .light select,
// .light textarea {
//     background: #ffffff;
//     color: #0f172a;
//     border: 1px solid #cbd5e1;
// }

// .dark input,
// .dark select,
// .dark textarea {
//     background: #1e293b;
//     color: #e2e8f0;
//     border: 1px solid #334155;
// }

// .light .small-card {
//     background: #ffffff;
//     color: #0f172a;
//     border-left: 4px solid #38bdf8;
// }

// .dark .small-card {
//     background: #1e293b;
//     color: #e2e8f0;
//     border-left: 4px solid #38bdf8;
// }
// .main-box h2 {
//     text-align: center;
//     margin-bottom: 15px;
//     color: #38bdf8;
// }

// .main-box h3 {
//     margin-top: 10px;
// }

// form {
//     margin-top: 20px;
// }

// label {
//     display: block;
//     margin-top: 10px;
//     font-weight: bold;
// }

// input,
// select,
// textarea {
//     width: 100%;
//     padding: 10px;
//     margin-top: 5px;
//     border: none;
//     border-radius: 6px;
//     outline: none;
// }

// textarea {
//     resize: none;
//     height: 80px;
// }

// button {
//     margin-top: 10px;
//     padding: 10px 15px;
//     border: none;
//     border-radius: 6px;
//     cursor: pointer;
//     font-weight: bold;
//     transition: 0.3s ease;
// }

// button[type="submit"] {
//     background: #22c55e;
//     color: white;
// }

// button[type="submit"]:hover {
//     background: #16a34a;
// }

// button[type="button"] {
//     background: #3b82f6;
//     color: white;
//     margin-right: 10px;
// }

// button[type="button"]:hover {
//     background: #2563eb;
// }

// .small-card {
//     background: #1e293b;
//     padding: 15px;
//     margin-top: 15px;
//     border-radius: 10px;
//     border-left: 4px solid #38bdf8;
// }

// .small-card h2 {
//     margin: 0;
//     color: #facc15;
// }

// .small-card h4,
// .small-card p {
//     margin: 5px 0;
// }

// .small-card span {
//     background: #334155;
//     padding: 3px 8px;
//     border-radius: 5px;
//     font-size: 12px;
//     color: #e2e8f0;
// }

// input[type="radio"],
// input[type="checkbox"] {
//     width: auto;
//     margin-right: 5px;
//     margin-left: 10px;
// } 
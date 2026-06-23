import { useState } from "react";

function Game({ players }) {
    const [isDark, setTheme] = useState(false);
    const [name, setName] = useState("");
    const [gname, setGame] = useState("");
    const [rank, setRank] = useState("");
    const [level, setLevel] = useState("");
    const [isOnline, setStatus] = useState(false);
    const [isShow, setShow] = useState(false);


    const selectplayer = players.find(
        (p) => p.name.toLowerCase() === name.toLowerCase()
    );

    return (
        <>
            <div className="small-box">


                <h2>
                    Theme : {isDark ? "Dark" : "Light"}
                </h2>
                <button onClick={() => setTheme(!isDark)}>  Toggle Theme</button>

                <hr />

                {/* INPUTS */}
                <label>Player Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <br />

                <label>Game Name:</label>
                <input type="text" value={gname} onChange={(e) => setGame(e.target.value)}/>
                <br />

                <label>Rank:</label>
                <input type="text" value={rank} onChange={(e) => setRank(e.target.value)}/>
                <br />

                <label>Level:</label>
                <input type="number" value={level} onChange={(e) => setLevel(e.target.value)}/>

                <hr />


                <h2>
                    Status : {isOnline ? "Offline" : "Online"}
                </h2>

                <button onClick={() => setStatus(!isOnline)}>
                    {isOnline ? "Go Online" : "Go Offline"}
                </button>

                <hr />

                <button onClick={() => setShow(!isShow)}>
                    {isShow ? "Hide Details" : "Show Details"}
                </button>


                {isShow && (
                    <div className="small-card">

                        {selectplayer ? (
                            <>
                                <h2>ID : {selectplayer.id}</h2>
                                <h2>Name : {selectplayer.name}</h2>
                                <h2>Hours Played : {selectplayer.hourse_played}</h2>
                                <h2>Weapon : {selectplayer.favorite_weapon}</h2>
                                <h2>Country : {selectplayer.country}</h2>
                                <h2>Join Date : {selectplayer.joindate}</h2>
                            </>
                        ) : (
                            <h3>No player found</h3>
                        )}

                    </div>
                )}

            </div>
        </>
    );
}

export default Game;
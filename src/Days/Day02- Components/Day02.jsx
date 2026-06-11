
function Day02(){
    return(
        <>
            <h1>This is the 2nd Day :Components</h1>
        </>
    )
}

function Header(){
    return <h2>This is the Header of the page</h2>
}

function Footer(){
    return <h3>Footer section </h3>
}

function Profile(){
    let name = 'SANJANA'
    let age  = 22
    let city = 'pune'
    return(
        <>
        <h3>PROFILE COMPONENT</h3>
            <ul>
                <li>Name : {name}</li>
                <li>Age : {age}</li>
                <li>City : {city}</li>
            </ul>
        </>
    )
}


export { Day02 , Header , Footer, Profile};



function Task(){
    let name = 'Sanjana'
    let city = 'Pune'
    let fruits = ['apple','banana','mango']
    let user = {
        name :'Sanju',
        age : 23
    }
    return(
        <>
            <p>-------------------------------------------------------------------------</p>
            <h2>With Variable = My Name Is {name}..</h2>
            <h3>With Expression  A + B = {10 + 20}</h3>
            <h4>With Variable = I live in {city}</h4>
            <h5>With Array = I like {fruits[1]}</h5>
            <h5>With Object = {user.name} is {user.age} years old.</h5>
        </>
    )
}
export default Task
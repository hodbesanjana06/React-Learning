import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";
function Home(){
    const {count , increment , decrement, reset} = useCounter()
    const {data , loading , error} = useFetch("https://jsonplaceholder.typicode.com/comments")

    if(loading){
        return <h2>loading</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }
    return(
        <>
            <h2>Custome Hooks</h2>
            <h3>Count : {count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
             <hr /> <br />

            <h2>User List</h2>
            {
                data.slice(0,5).map((m)=>(
                    <h3 key={m.id}>Name : {m.name}</h3>
                ))
            }

        </>
    )
}

export default Home;
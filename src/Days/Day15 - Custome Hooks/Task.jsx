import useCounter from "./hooks/useCounter";
// import useFetch from "./hooks/useFetch";
import useEmpFetch from "./hooks/useEmpFetch";

function Task(){
    const {count , increment , decrement , reset} = useCounter()
    const {data , loading , error} = useEmpFetch("https://jsonplaceholder.typicode.com/users")

    if(loading){
        return <h2>loading</h2>
    }

    if(error){
        return <h2>{error}</h2>
    }
    return(
        <>
            <div className="container">
                <h2>Like Counter</h2>
                <h3>Likes : {count}</h3>
                <span onClick={increment}>❤️ <strong>Like</strong></span> <br />
                <span onClick={decrement}>👎 <strong>Dislike</strong></span> <br />
                <button onClick={reset}>Reset</button>
            </div>

            <hr /> <br />

           {
            data.slice(0,5).map((e) => (
                <h3 key={e.id}>
                    {e.name} - {e.email}
                </h3>
            ))
        }
        </>
    )
}
export default Task;

function ListKey(){
    let colors = ["red", 'Blue', 'Green']
    let fruits = ["apple", 'Mango', 'Orange']
    let students = [
        {
            id : 101,
            name : "Rahul"
        },
        {
            id : 102,
            name : "Aman"
        },
    ]

    let shops = [
        {
            id: 1001,
            product: "Laptop",
            price: 50000
        },
        {
            id: 1002,
            product: "Phone",
            price: 20000
        }
    ]


    let movies = [
         {
            id: 1,
            title: "Inception",
            rating: 9
        },
        {
            id: 2,
            title: "Interstellar",
            rating: 10
        },
        {
            id: 3,
            title: "Avatar",
            rating: 8
        }
        
    ]
    return(
        <>
        <div className="small-box">
            <h3>using map  </h3>
            {colors.map((c)=>(
                <h2 key={c}>{c}</h2>
            ))}
        </div>


        <div className="small-box">
            <h3>using map + dispaly li</h3>
            <ul>
                {fruits.map((f)=>(
                    <li key={f}>{f}</li>
                ))}
            </ul>
        </div>


        <div className="small-box">
                <h3>array of object + card</h3>
                {students.map((s)=>(
                    <div key={s.id} className="small-card">
                        <h2>Name : {s.name}</h2>
                        <p>ID : {s.id}</p>
                    </div>
                
                ))}
        </div>

        <div className="small-box">
                {
                    shops.map((i)=>(
                        <div className="small-card">
                            <h2>ID : {i.id}</h2>
                            <h3>Product : {i.product}</h3>
                            <h3>Price : {i.price}</h3>
                        </div>
                    ))
                }
        </div>


        </>
    )
}

export default ListKey;
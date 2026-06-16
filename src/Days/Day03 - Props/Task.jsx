
function EmployeeCard({employee}){
    return (
        <>
        <div className="card">

            <div className="card-first">
                <h2 className="name">Name : {employee.name}</h2>
                <h2>Department : {employee.depart}</h2>
                <span>------------------------------------------------------</span>
            </div>

             <div className="card-info">
                <h3>Age : {employee.age} </h3>
                <h3>Salary : {employee.salary}</h3>
                <h3>City : {employee.salary}</h3>
                <h3>Skills : {employee.skills[0]} , {employee.skills[1]} , {employee.skills[2]}</h3>
            </div>

         </div>
        </>
    )
}

export default EmployeeCard;
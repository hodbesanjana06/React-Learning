import { useState, useEffect } from "react";

function Emp() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2 className="msg">Loading...</h2>;
  if (error) return <h2 className="msg">{error}</h2>;

  return (
    <div className="container">

      <h1 className="title">Employee Directory</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>Total Employees: {filteredUsers.length}</p>
      </div>

      <div className="main-box">
        {filteredUsers.map((u) => (
          <div className="small-box" key={u.id}>
            <h3>{u.name}</h3>
            <p>{u.email}</p>
            <p>{u.phone}</p>
            <p>{u.company.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Emp;
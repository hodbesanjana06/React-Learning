import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact(){
    function handleForm(e){
        e.preventDefault()
    }

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [phone , setPhone] = useState("")

    return(
        <>
            <div className="contact-card">
                <h3>Contact Page</h3>

                <form onSubmit={handleForm}>
                    <label>Email</label>
                    <input type="email" value={email}  onChange={(e)=> setEmail(e.target.value)}/> <br />

                    <label>Phone</label>
                    <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} /> <br />

                    <button type="submit">Submit</button>
                    <button onClick={()=> navigate(-1)}>Back</button>
                </form>
            </div>

        </>
    )
}
export default Contact;
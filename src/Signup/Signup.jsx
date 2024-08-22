import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Signup.css'


const Signup = () => {

    const navigate = useNavigate();

    try {
        
        var validateSignup = async (values) => {
            await axios.post("https://e-commerce-backend-karthik-saran07.onrender.com/api/user/createUser", values);
            alert("Signup sucess!")
            navigate('/login')
        }

    } catch (error) {
        alert("Signup failed!!")
    }

    const handleSignup = (e) => {
        e.preventDefault();
        const values = {
            name,
            email,
            password
        }
        validateSignup(values)
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <div className="signup-body">
            
        <div className="signup-box">
            <h1>SignUp</h1>
            <form>
            <div className="user-name">
                <input placeholder="name" type="text" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="user-email">
                <input placeholder="email" type="email" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="user-password">
                <input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={handleSignup}>Signup</button>
            <p>Already have an account ?</p>
            <button onClick={()=>navigate("/login")}> Login</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default Signup
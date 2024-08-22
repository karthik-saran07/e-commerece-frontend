import { Link } from 'react-router-dom';
import './Login.css'
import  axios  from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
    const handlernavi = async(values)=>{

        try{
            // console.log(values)
             await axios.post("https://e-commerce-backend-karthik-saran07.onrender.com/api/user/userLogin",values)
             alert("success login")
             navigate('/')
        }
        catch(e){
            alert("failure try again");
        }
    }
    const handleclickfunction =(e)=>{
        e.preventDefault();
        const values ={
            email,password
        }
        handlernavi(values)
    }
    return (
        <>
        <div className="login-body">
            <div className="login-page">
                <div className="login-box">
                    <div className="login-header">
                        <h1>Login</h1>
                    </div>
                    <form className="form-details">
                    
                        <input type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                    
                    
                        <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    
                        <div className="login-button">
                        <button onClick={handleclickfunction}>Login</button>
                        </div>
                    </form>
                    <div className="redirect-to-signup">
                        <p className="signup-text">New user ? Register Now</p>
                        <div className="signup-button">
                        <Link to="/signup"><button type="signup-button">Signup</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login;
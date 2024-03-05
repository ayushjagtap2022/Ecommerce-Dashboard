import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'
export const Login = () => {
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const navigate = useNavigate()
    const local = localStorage.getItem("User");
    useEffect(()=>{
    if(local){
     navigate('/productlist')
    }else{
      navigate('/login')
    }
    },[])
    const Login = async ()=>{
      const schema = {"email":Email,"password":Password}
      const result = await fetch('http://localhost:5000/login',{
        method:"POST",
        body:JSON.stringify(schema),
        headers:{
        "Content-Type":"application/json"
        }
      })
     let resp = await result.json();
     if(resp.auth){
       localStorage.setItem("User",JSON.stringify(resp.Info))
       localStorage.setItem("Auth",JSON.stringify(resp.auth))
       alert("Logged in Sucessfully")
       navigate('/productlist')
      }
      else{
        alert("Please write correct information")
     }
     }
  return (
    <div className='main'>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className='flexl'>
       <h1 className='text-center mt-3'>Login</h1>  
       <input value={Email} onChange={(e)=>{setEmail(e.target.value)}}  type="text" placeholder='Enter Email'/>
       <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} className='marl'type="text" placeholder='Enter Password'/>
       <input type="button" onClick={Login} className='widthl'  value='Login'/>
            </div>
        </form>
        
        </div>
  )
}
export default Login
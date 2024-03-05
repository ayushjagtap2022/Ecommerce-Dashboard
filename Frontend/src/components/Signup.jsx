import React,{useEffect,useState} from 'react'
import { useNavigate} from 'react-router-dom'
import '../css/signup.css'
export const Signup = () => {
const [user, setUser] = useState('')
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')
  const local = localStorage.getItem("User");
const navigate = useNavigate()
const Passinfo = (e)=>{
  setPassword(e.target.value)
}
const Emailinfo = (e)=>{
setEmail(e.target.value)
}
useEffect(()=>{
  if(local){
    navigate('/productlist')
  } 
})
const Api = async () =>{
  let schema = {"user":user,"password":password,"email":email};
 let result = await fetch('http://localhost:5000/register',{
  method:'POST',
  body:JSON.stringify(schema),
  headers:{
    'Content-Type':'application/json',
  }
 })
    const res =  await result.json()
  localStorage.setItem("User",JSON.stringify(res.result)) 
  localStorage.setItem("Auth",JSON.stringify(res.auth)) 
 navigate('/productlist')
  }
const Signup = async () => {
await Api()
}
  return (
    <div className='main'>
          <div className='d-flex flex align-items-center flex-column'>
      <h1 className='text-center mar'>Sign Up</h1>
      <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Enter Username' />
       <input type="email" value={email} className='mar' onChange={Emailinfo} placeholder='Enter Email' />
       <input type="password" value={password} onChange={Passinfo} placeholder='Enter Password'/>
       <input type="button" onClick={Signup} value='Register' className='width mar'/>
       </div>
        </div>
        
  )
}
export default Signup

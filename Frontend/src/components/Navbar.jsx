import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import '../css/Navbar.css'
export const navbar = () => {
  const local = localStorage.getItem('User') 
  const navigate = useNavigate();
  const logout= () =>{
    localStorage.clear();
   navigate('/signup')
  }

  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">E-Commerce Dasboard</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
    { local ?
          <>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/addproducts' >Add Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/productlist' >Product List</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active"  onClick={logout} to='/signup' >Logout</Link>
      </li>
       </>
       : <>
       <li className="nav-item">
       <Link className="nav-link active"  to='/login'>Login</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link active" to='/signup'>Signup</Link>
   </li>
       </>
    }  
      </ul>
 <div className='d-flex'>
       <img src="/img/userLogo.jpg" className='size' alt="no image" />      
 { local && <h4 className='mt-2'>{JSON.parse(local).user}</h4>} 
 </div>
      
      
 
    </div>
  </div>
</nav>
  )
}
export default navbar
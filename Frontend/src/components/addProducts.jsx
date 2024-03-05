import React,{useState} from 'react'
import '../css/signup.css'
export const addProducts = () => {
  const [Name,setName] = useState("")
  const [Price,setPrice] = useState(Number)
  const [Category,setCategory] = useState("")
  const [Company,setCompany] = useState("")
  const [Error,setError] = useState(false)
  const submit = async (e) =>{
    if(!Name ||Price==0||null||!Category||!Company){
      setError(true);
      e.preventDefault()     
    }
    else{
      const Schema = {"Name":Name,"Price":Price,"Category":Category,"Company":Company}
      const result = await fetch('http://localhost:5000/addproduct',{
        method:'POST',
        body:JSON.stringify(Schema),  
        headers:{
          "Content-Type":"application/json",
          'authorization':`bearer ${JSON.parse(localStorage.getItem("Auth"))}`
        }
      })
      const resp = await result.json();
      localStorage.setItem("Products",JSON.stringify(resp))
      alert("Product added sucessfully")
      return true
    }
    }
  return (
    <div className='main'>
      <form onSubmit={submit}>
        <div className='d-flex flex align-items-center flex-column'>
   <h1 className='text-center mar'>Add Product</h1>
        <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}}  className='m-2' placeholder='Enter product name'/>
   {Error  && !Name && <p>Product Name cannot be Empty</p>}
        <input type="number"  value={Price} onChange={(e)=>{setPrice(e.target.value)}} className='m-2'  placeholder='Enter product price' />
     {Error &&  Price==null||Price==0 && <p>Price cannot be Empty or 0</p>}
        <input type="text"  value={Category} onChange={(e)=>{setCategory(e.target.value)}} className='m-2' placeholder='Enter product category'/>
     {Error  && !Category&& <p>Category Name cannot be Empty</p>}
        <input type="text"  value={Company} onChange={(e)=>{setCompany(e.target.value)}} className='m-2' placeholder='Enter product company'/>
      {Error && !Company && <p>Company Name cannot be Empty</p>} 
    <input type="submit" className='width mar mt-3'/>
    </div>
      </form>
      </div>
  )
}
export default addProducts
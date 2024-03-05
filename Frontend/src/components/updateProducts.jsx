import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
export const updateProducts = () => {
  const [Name,setName] = useState("")
  const [Price,setPrice] = useState(Number)
  const [Category,setCategory] = useState("")
  const [Company,setCompany] = useState("")
  const params = useParams();
  const Navigate = useNavigate()
  useEffect(()=>{
    getProductdetails();
  },[])
const updateProduct = async () =>{
      let schema = {"Name":Name,"Price":Price,"Company":Company,"Category":Category}
  let res = await fetch(`http://localhost:5000/updateproducts/${params.id}`,{
    method:"PUT",
    body:JSON.stringify(schema),
    headers:{
      'Content-Type':"application/json",
      'authorization':`bearer ${JSON.parse(localStorage.getItem("Auth"))}` 
  }
  });
  await res.json();
  Navigate('/productlist')
 
}
const getProductdetails =  async () =>{
      let res =await fetch(`http://localhost:5000/updateproducts/${params.id}`,{
        method:"GET"
      })
      res = await res.json() 
      // console.log(res)
      setName(res.Name);
      setPrice(res.Price);
      setCategory(res.Category);
      setCompany(res.Company);
}
  return (
    <div className='main'>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className='d-flex flex align-items-center flex-column'>
   <h1 className='text-center mar'>Update Product</h1>
        <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}}  className='m-2' placeholder='Enter product name'/>
        <input type="number"  value={Price} onChange={(e)=>{setPrice(e.target.value)}} className='m-2'  placeholder='Enter product price' />
        <input type="text"  value={Category} onChange={(e)=>{setCategory(e.target.value)}} className='m-2' placeholder='Enter product category'/>
        <input type="text"  value={Company} onChange={(e)=>{setCompany(e.target.value)}} className='m-2' placeholder='Enter product company'/>
    <input type="submit" onClick={updateProduct} className='width mar mt-3'/>
    </div>
      </form>
      </div>
  )
}
export default updateProducts

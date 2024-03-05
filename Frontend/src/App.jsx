import Error from './Error/error404'
import Navbar from './components/Navbar';
import  Private  from './private/privateComponent';
import AddProducts from './components/addProducts';
import UpdateProducts from './components/updateProducts';
import Profile from './components/Profile'
import Footer from './components/Footer'
import Signup from './components/Signup';
import Login from './components/Login';
import ProductList from './components/productList';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Private/>}>         
<Route exact path='/addproducts' element={<AddProducts/>}/>
<Route exact path='/productlist' element={<ProductList/>}/>
<Route exact path='/updateproducts/:id' element={<UpdateProducts/>}/>
<Route exact path='/profile' element={<Profile/>}/>
        </Route>
<Route exact path='/login' element={<Login/>}/>
<Route exact path='/signup' element={<Signup/>}/>
<Route exact path='/' element={<Signup/>}/>
<Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

  )
}

export default App

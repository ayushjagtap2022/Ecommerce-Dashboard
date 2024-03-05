import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/productList.css";

export const productList = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    const resp = await fetch('http://localhost:5000/listproducts', {
      headers:{
        'authorization':`bearer ${JSON.parse(localStorage.getItem('Auth'))}`
      }
    });
    const result = await resp.json();
    setProducts(result);
  };

  const search = async (e) => {
    setSearchProducts(e.target.value);
    if (e.target.value === "") {
      fetchProductList();
    } else {
      const resp = await fetch(`http://localhost:5000/searchproducts/${e.target.value}`, {
        method: "GET",
        headers:{
          'authorization':`bearer ${JSON.parse(localStorage.getItem("Auth"))}`
        }
      });
      const searchResult = await resp.json();
      setProducts(searchResult);
    }
  };

  const Delete = async (id) => {
    const resp = await fetch(`http://localhost:5000/deleteproducts/${id}`, {
      method: "DELETE",
      headers:{
        'authorization':`bearer ${JSON.parse(localStorage.getItem("Auth"))}`
      }
    });
    const result = await resp.json();
    if (result) {
      fetchProductList();
    }
  };

  return (
    <div className="product-list">
      <h1 className="pro-list">Product list</h1>
      <input type="search" className="search-bar" value={searchProducts} onChange={search} />
      <ul className="pl-ul">
        <li className="pl-li">Product Name</li>
        <li className="pl-li">Product Price</li>
        <li className="pl-li">Product Company</li>
        <li className="pl-li">Product Category</li>
        <li className="pl-li">Delete Product</li>
        <li className="pl-li">Update Product</li>
      </ul>
      {products.length > 0 ? (
        products.map((e) => (
          <div key={e._id}>
            <ul className="pl-ul">
              <li className="pl-li">{e.Name}</li>
              <li className="pl-li">{e.Price}</li>
              <li className="pl-li">{e.Company}</li>
              <li className="pl-li">{e.Category}</li>
              <li className="pl-li">
                <button onClick={() => Delete(e._id)} className="de-product">
                  Delete
                </button>
              </li>
              <li className="pl-li">
                <Link to={`/updateproducts/${e._id}`}>Update</Link>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <h3>NO RESULT FOUND</h3>
      )}
    </div>
  );
};
export default productList

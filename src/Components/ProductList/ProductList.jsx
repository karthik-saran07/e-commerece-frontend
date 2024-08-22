import { useEffect, useState } from "react";
import axios from 'axios'
import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";
import './ProductList.css'
const ProductList = ()=>
{
    
    const [query, setQuery] = useState("");

    const [products, setProducts] = useState([])

    const handleSearch = (event)=>
    {
        setQuery(event.target.value);
    }
    const handleproducts = async()=>{
        try{
        }catch(e){

        }
    }

    const productData = async () => {
        try {
         
         await axios.get("https://e-commerce-backend-karthik-saran07.onrender.com/api/product/getProduct")
         .then( (res)=> {
             setProducts(res.data)
         })

        } catch (error) {
             throw error
        }
     }

    useEffect( ()=> {
        productData();
    }, [] )

    // console.log(products);
    
    const filteredData = products.filter((data)=>
        data.title.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <>
        <NavBar />
        <div className="search-bar" >
        <input type="text" className="search-input" onChange={handleSearch} value={query} placeholder="Enter title"/>
        </div>
        
        <div className="product-list">
        {
            filteredData.map((data) =>
            (
                <Product key = {data.id}
                productData = {data}
                />
            ))
        }
        </div>
        </>
    )
}

export default ProductList;
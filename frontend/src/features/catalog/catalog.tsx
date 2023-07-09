import { useState,useEffect } from "react"
import { Product } from "../../app/models/product"
import { Button } from "@mui/material";
import ProductList from "./ProductList";



export default function Catalog(){
    const [products,setProduct]=useState<Product[]>([]);
   useEffect(() =>{
    fetch('https://localhost:5003/api/product')
    .then(response => response.json())
    .then(data=>setProduct(data))
    .catch(error => console.log(error)); // Trate o erro de forma apropriada
  
   },[])
    
  
    return(
        <>        
     
 <ProductList products={products}/>
    </>

    )
}




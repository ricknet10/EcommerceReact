import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
//import './App.css';
import { Product } from './product';
//import { Product } from './Product';
//import { Product } from './Product';


function App() {
  const [products,setProduct]=useState<Product[]>([
  ]);
 useEffect(() =>{
  fetch('http://localhost:5003/api/product')
 // fetch('https://localhost:44442/backend/products')
  .then(response => response.json())
  .then(data=>setProduct(data))
  .catch(error => console.log(error)); // Trate o erro de forma apropriada

 },[])
  
 function addProduct(): void{
  setProduct(prevState => [...prevState,
  {
    id: prevState.length + 101,
    name: 'product' + (prevState.length +1),
    price:(prevState.length * 100) + 100,
    brand:'som brand',
    description:'some description',
    pictureUrl: 'htt://picsum.photos/200'    
  }])
 }

  return (
    <div>
     <h1>React Ecommerce</h1>
     <ul>
      {products.map(product => (
        <li key={product.id}>{product.name} - {product.price}</li>
      ))}
     </ul>
     <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;

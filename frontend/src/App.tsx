import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react";

function App() {
  const [products,setProducts]=useState<Product[]>([
  // {name:'product1', price: 100.00},
   //{name:'product2', price: 100.00},
  ]);
 useEffect(() =>{
  fetch('http://localhost:5000/api/products')
  .then(response => response.json())
  .then(data=>setProducts(data))
 },[])
  
 function addProduct(){
  setProducts(prevState => [...prevState,
  {
    id: prevState.lenght + 101,
    name: 'product' + (prevState.lenght +1),
    price:(prevState.lenght * 100) + 100,
    brand:'som brand',
    description:'some description',
    pictureUrl: 'htt://picsum.photos/200'
    //name: 'product'+ (prevState.length = 1),price:(prevState.length = 100)+100}])
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
    </div>
  );
}

export default App;

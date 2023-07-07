import React, { useEffect, useState } from 'react';
import './styles.css';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/catalog';


function App() {
  const [products,setProduct]=useState<Product[]>([
  ]);
 useEffect(() =>{
  fetch('https://localhost:5003/api/product')
  .then(response => response.json())
  .then(data=>setProduct(data))
  .catch(error => console.log(error)); // Trate o erro de forma apropriada

 },[])
  
 function addProduct(){
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
     <Catalog products= {products} addProduct={addProduct} />

    </div>
  );
}

export default App;

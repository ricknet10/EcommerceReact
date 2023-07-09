import React, { useEffect, useState } from 'react';
import './styles.css';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/catalog';
import { Container, CssBaseline } from '@mui/material';
import Header from './Header';


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
    pictureUrl:"https://fastly.picsum.photos/id/50/200/200.jpg?hmac=Tz-5Oumk5gfW4P4hAiYNsHDjmBVhOzedd8gy4aEsumY" //'htts://picsum.photos/200'    
  }
])
 }

  return (
    <>
    <CssBaseline/>
     <Header/>
     <Container>
     <Catalog products= {products} addProduct={addProduct} />
     </Container>
</>
    
  );
}

export default App;

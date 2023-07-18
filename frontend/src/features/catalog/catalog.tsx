import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import { Button } from "@mui/material";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
//import LoadingComponent from "../../app/layout/LoadingComponent";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    //fetch('https://localhost:5003/api/product')
    //.then(response => response.json())
    //.then(data=>setProduct(data))
    //.catch(error => console.log(error)); // Trate o erro de forma apropriada
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  //if (loading) return <LoadingComponent message="Loading products..." />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

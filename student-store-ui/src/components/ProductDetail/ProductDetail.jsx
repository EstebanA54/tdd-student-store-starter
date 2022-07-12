import * as React from "react"
import "./ProductDetail.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from '../ProductCard/ProductCard'
import NotFound from '../NotFound/NotFound'
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductView from "../ProductView/ProductView";

export default function ProductDetail(handleAddItemToCart,handleRemoveItemToCart) {
  const [product, setProduct] = React.useState([]);
  const { productId } = useParams();
  const [error, setError] = React.useState(0);
  const [notFound, setNotFound] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false)
  console.log(productId);

  const loadProducts = async () => {
      try {
        const response = await axios.get('https://codepath-store-api.herokuapp.com/store/'+productId);
        if (response.data.product) {
          setProduct(response.data.product);
        }
        console.log(23, response);
      } catch (error) {
        console.log("error",error);
        setError(error)
        setNotFound(true)
      } finally {
        setIsFetching(false)
      }
    }
    
    React.useEffect(() => {
      <h1 className="loading">Loading...</h1>
      loadProducts();
    }, []);

  if (NotFound === true) {
    return (
      <NotFound/>
    )
  } else {
    return (
      <div id = {"/products/:productId"} className="product-detail">
        <h1 className="product-id">Product #{productId}</h1>
        <p className = "product-name">{product.name}</p>
        <img src={product.image} ></img>
        <p className = "product-price">${product.price}</p>
        <p className = "product-description">{product.description}</p>
      </div>
    )
    
  }

}

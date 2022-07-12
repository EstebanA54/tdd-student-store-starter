import * as React from "react"
import "./ProductCard.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function ProductCard({product,productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription,shoppingCart}) {
    let idx = shoppingCart.findIndex(el => el.itemId == productId)
    console.log(idx)
  
  return (
    <div className="product-card">
      <Link to={"/products/"+product.id} className = "media">
        <img src={product.image} ></img>
      </Link>
      <div className="main-info">
        <p className = "product-name">{product.name}</p>
        <p className = "product-price">${product.price.toFixed(2)}</p>
        
      </div>
      <div className="actions"> 
        <h1 className="product-quantity">{idx != -1 ? shoppingCart[idx].quantity : null} </h1>
        <button className="add" onClick={(e) => {handleAddItemToCart(product.id)}}>
          add
        </button>
        <button className="remove" onClick={(e) => {handleRemoveItemFromCart(product.id)}}>
          remove
        </button>
      </div>
    </div>
    
  )
}

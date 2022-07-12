import * as React from "react"
import "./ProductView.css"
import {Link} from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductView(product,productId) {
    console.log(43,product)
    console.log(888,product.id)
    console.log("how",product.name)
    return (
      <div className="product-view">
        <h1 className="product-id">Product #{product.name}</h1>
        {/* <ProductCard
                key={product.id}
                product={product}
        />  */}
      </div>
    )
  }
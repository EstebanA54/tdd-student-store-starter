import * as React from "react"
import ProductCard from "../ProductCard/ProductCard";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./SubNavBar.css"

export default function SubNavBar({products,setSelectedCategory,searchInput,setSearchInput, setProducts, handleSubmit, filterSearch}) {
  
  return (
    <div className="sub-navbar">
      <div className="content">
          <div className="row">
              <div className="search-bar">
                  <input 
                    type="text" 
                    name ="search" 
                    placeholder="Search" 
                    value={searchInput}
                    onChange={handleSubmit}
                  />
                </div>
                
                 
                <ul className="category-menu">
                    {["All Categories","Clothing","Food","Accessories","Tech"].map((c,i)=>  (
                    <li>
                        <button type="button" onClick={()=>setSelectedCategory(c)}>{c}</button>
                    </li>
                    ))}
                </ul>
              </div>
         
      </div>
    </div>
  )
}
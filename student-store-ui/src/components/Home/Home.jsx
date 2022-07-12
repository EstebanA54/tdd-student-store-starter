import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SubNavBar from "../SubNavBar/SubNavBar"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"


export default function Home({products, handleAddItemToCart, handleRemoveItemFromCart, searchInput,handleSubmit,shoppingCart}) {
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");
    
  const productFilterCat = selectedCategory.toLowerCase() !== "all categories" ? products.filter((prod)=>prod.category===selectedCategory.toLowerCase()):products;
  const filterProducts = Boolean(searchInput) ? products.filter((value) => value.name.toLowerCase().includes(searchInput)) : productFilterCat;
  console.log(1,filterProducts);
  return (
    <div className="home">
      <Hero/>
      <SubNavBar key = {0} selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory} searchInput={searchInput} handleSubmit={handleSubmit}/>
      <ProductGrid products={filterProducts} handleAddItemToCart={handleAddItemToCart} shoppingCart={shoppingCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

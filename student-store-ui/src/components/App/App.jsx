import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { BrowserRouter, Routes, Route, Link, useParams  } from "react-router-dom";
import "./App.css"
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import axios from 'axios';
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function App() {
  // products
  const [products, setProducts] = React.useState([]); //array of product objects
  const [isFetching, setFetching] = React.useState(false); //app is fetching products from api
  const [error, setError] = React.useState(0); //something wrong with the api requests
  const [shoppingCart, setShoppingCart] = React.useState([]); //store state for the active user's shopping cart
  const [searchInput, setSearchInput] = React.useState("");
  const [checkoutForm, setCheckoutForm] = React.useState(); //the user's information that will be sent to the API when they checkout.
  const { productId } = useParams();
  const [success, setSuccess] = React.useState(false)
  const [receipt, setReceipt] = React.useState({})

  const handleOnCheckoutFormChange = (name,value) => {
    setCheckoutForm({...checkoutForm,[name]: value });
  }

  async function handleOnSubmitCheckoutForm() {
    setSuccess(true)
    axios.post("http://localhost:3001/store/", {user:checkoutForm, shoppingCart:shoppingCart})
    .then((res)=> {
      setShoppingCart([])
      setCheckoutForm({name:"", email:""})
      
    })
    .catch((err)=> {
      setError(err)
      // setSucess(false)
    })
  }
  const handleSubmit = (event) => {
    setSearchInput(event.target.value);
    console.log(8,event.target.value);
  }
  const addItemToCart = (productId) => {
    let newCartProduct = {
      itemId: productId,
      quantity: 1
    }
    setShoppingCart(state=>[...state,newCartProduct]) //append an element to an array stored in our component state 
    
  }

  const updateItem = (productId) => {
    console.log("update this item!")
    let copyShoppingCart = [...shoppingCart]
    let index = copyShoppingCart.findIndex(e => e.itemId == productId)
    copyShoppingCart[index].quantity +=1;
    setShoppingCart(copyShoppingCart)
  }

  const removeItem = (productId) => {
    let copyShoppingCart = [...shoppingCart]
    let index = copyShoppingCart.findIndex(e => e.itemId == productId)
    copyShoppingCart[index].quantity -=1;
    console.log("index",index)
    console.log("quantity",copyShoppingCart[index].quantity)
    setShoppingCart(copyShoppingCart)
    
  }

  const handleRemoveItemFromCart = (productId) => {
    shoppingCart.map((item,index) => {
      if (item.itemId == productId) {
        if (shoppingCart[index].quantity > 1) {
          removeItem(productId)   
        } else {
          console.log("remove item from cart!")
          let copyShoppingCart = [...shoppingCart]
          copyShoppingCart.splice(index,1)
          setShoppingCart(copyShoppingCart)
        }
      } 
    })
    console.log("shopping cart!!",shoppingCart)
  }

  const handleAddItemToCart = (productId) => {
    // if theres nothing in the shopping cart add item to cart with the properties
    // else loop through the sho
    console.log("length :",shoppingCart.length)
      if (shoppingCart.length == 0) {
        addItemToCart(productId)
      }
  
      shoppingCart.map((item, index) => {
      if (item.itemId == productId) {
        updateItem(productId)
      } else if (index == shoppingCart.length-1) {
        console.log("new item ",index)
        addItemToCart(productId)
      }
      // item.itemId == productId ? updateItem(productId) : (index == shoppingCart.length - 1 ? addItemToCart(productId) :null)
    })
  
  console.log("shopping cart",shoppingCart)
  };

  // function productPage() {
  //   // Get the userId param from the URL.
  //   let { productId } = useParams();
  //   // ...
    
  // }
  React.useEffect(() => {
    const loadProducts = async () => {
      setFetching(true)
      try {
        const response = await axios.get('http://localhost:3001/store');
        console.log("axios:",response)
        if (response.data.products) {
          setProducts(response.data.products);
        } else {
          setError("error")
        }   
      } catch (error) {
        console.error(error);
        setError(error)
      }
      setFetching(false);
    }
    loadProducts();
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar products={products}/>
          <Sidebar 
            shoppingCart={shoppingCart} 
            products={products} 
            checkoutForm={checkoutForm} 
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
            // handleOnToggle={handleOnToggle} 
            // checkoutForm={checkoutForm} 
            handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
            success={success}
            setSuccess={setSuccess}
            // handleOnToggle={handleOnToggle}
          />
          <Routes>
            <Route path ="/" element={
              <Home 
                products={products}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setProducts={setProducts}
                handleSubmit={handleSubmit}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                shoppingCart={shoppingCart}
                />
            }/>
            <Route path ='/products/:productId' element={
              <ProductDetail/>
            }>
            </Route>
            <Route path ="*" element={
              <NotFound/>
            }/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import arrowForward from "/assets/arrowForward1.png"

export default function Sidebar({ shoppingCart, products=[], checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, setSuccess, success}) {
  console.log("success",success)
  const [isOpen, setOpen] = React.useState(false); //whether sidebar.jsx is in the open or closed state
  // change isopen state from false to true and true to false
  let sidebarClass = isOpen ? "sidebar open" : "sidebar closed"
  const sideBarClick = () => {
    //condition checking to change state from true to false and vice versa
    isOpen ? setOpen(false) : setOpen(true);
  };
  
  return (
    <section className={sidebarClass}>
      <div>
      <button className="toggle-button" onClick={sideBarClick}>
        <img src={arrowForward}
          alt = "arrow"
        />
      </button>
      {isOpen ? 
      <div className="checkout">
      <ShoppingCart isOpen={isOpen} shoppingCart={shoppingCart} products={products}/>
      <CheckoutForm isOpen={isOpen} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} success={success} setSuccess={setSuccess}></CheckoutForm>
      </div>
      : null}
      </div>
    </section>
  )
}

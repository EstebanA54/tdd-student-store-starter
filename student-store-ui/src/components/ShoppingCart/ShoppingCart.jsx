import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
  let total = 0;
  const itemSubtotal = (unitPrice,quantity) => {
    total = unitPrice*quantity
    return total;
  }

  let sum = 0;
  let orderTotal = 0;
  const calculateTaxesAndFees = (orderTotal) => {
    return orderTotal * 0.0875
  }
  const calcTotal = (orderTotal) => {
    return subTotal + calculateTaxesAndFees(orderTotal)
  }



  if (props.shoppingCart.length > 0) {
    return (
      <div className="shopping-cart">
        <h3 className = "title">Shopping Cart</h3>
        <div className = "header">
          <div className = "header-row">
            <span className="flex-2">Name </span>
            <span className="center">Quantity </span>
            <span className="center">Unit Price </span>
            <span className="center">Cost </span>
          </div>
        </div>
        {props.shoppingCart.map((item)=> {
          const currItem = props.products.find((ele) => ele.id === item.itemId)
          orderTotal += currItem.price *item.quantity
          return (
          <div className="product-row">
            <span className="flex 2 cart-product-name">{props.products[item.itemId-1].name} </span>
            <span className="center cart-product-quantity">{item.quantity} </span>
            <span className="center cart-product-price">${props.products[item.itemId-1].price.toFixed(2)} </span>
            <span className="center subtotal">${itemSubtotal(props.products[item.itemId-1].price,item.quantity).toFixed(2)} </span>
          </div>)
          
          })}
        <div className="receipt">
              <div className="receipt-subtotal">
                <span className="label">Subtotal </span>
                <span>${(orderTotal).toFixed(2)}</span>
              </div>
              <div className="receipt-taxes">
                <span className="label">Taxes and Fees </span>
                <span>${(orderTotal*0.0875).toFixed(2)}</span>
              </div>
              <div className="total-price">
                <span className="label">Total </span>
                <span>${(orderTotal+(orderTotal*0.0875)).toFixed(2)}</span>
              </div>
        </div>
        <div className="checkout-form">
          <h3>Payment Info</h3>
        </div>
        <div className="input-field">
          <span className="label">Name</span>
          <div className="control">
            <input name="name" className="checkout-form-input" type="text" placeholder="Student Name">
            </input>
          </div>
        </div>
        <div className="input-field">
          <span className="label">Email</span>
          <div className="control">
            <input name="name" className="checkout-form-input" type="text" placeholder="student@codepath.org">
            </input>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input name = "termsAndCondition" type = "checkbox"></input>
              <span className="label">I agree to the <a href ="#terms-and-conditions">terms and conditions</a></span>
            </label>
          </div>
        </div>
        {/* <div className="field">
          <div className="control">
            <button className="button checkout-button">Checkout</button>
          </div>
        </div> */}
      </div>
    )
  } else {
    return (
      <div className="no-shopping">
        <h3>Shopping Cart</h3>
        <h1>No items added to cart yet. Start shopping now!</h1>
      </div>
      
    )
  }
}

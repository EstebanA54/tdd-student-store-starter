import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, success, setSuccess}) {
  console.log("succ",success)
  return (
    <div className="checkout-form">
      <div className="field">
          <div className="control">
            <button onClick={handleOnSubmitCheckoutForm}className="button checkout-button">Checkout</button>
            {success ? (<p className="success"></p>):
            null}
          </div>
        </div>
    </div>
  )
}

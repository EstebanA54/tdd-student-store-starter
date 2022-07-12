import * as React from "react"
import "./Footer.css"

export default function Footer() {
    return (
      <div className="footer">
       <div class="contain">
        <div class="col">
            <h1>Categories</h1>
            <ul>
            <li>All Categories</li>
            <li>Clothing</li>
            <li>Food</li>
            <li>Accessories</li>
            <li>Tech</li>
            </ul>
        </div>
        <div class="col">
            <h1>Company</h1>
            <ul>
            <li>About Us</li>
            <li>Find a Store</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Careers</li>
            </ul>
        </div>
        <div class="col">
            <h1>Support</h1>
            <ul>
            <li>Contact Us</li>
            <li>Money Refund</li>
            <li>Order Status</li>
            <li>Shipping Info</li>
            <li>Open Dispute</li>
            </ul>
        </div>
        <div class="col">
            <h1>Account</h1>
            <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Account Setting</li>
            <li>My Orders</li>
            </ul>
        </div>
        <div class="col">
            <h1>Socials</h1>
            <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
            </ul>
        </div>
        </div>
      </div>
    )
  }
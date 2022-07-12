import * as React from "react"
import "./Hero.css"
import homeLogo from "/assets/student_store_icon.svg"

export default function Hero() {
    return (
      <div className="hero">
        <div className="content">
          <div className="intro">
            <h1>Welcome!</h1>
            <h1>Find Your Merch!</h1>
            <p>
              We have all kinds of goodies. 
              Click on any of the items to start filling up your 
              shopping cart. Checkout whenever you're ready.
            </p>
          </div>
          <div class="media">
            <img src = {homeLogo} alt = "hero" class="hero-img"/>
          </div>
        </div>
      </div>
    )
  }
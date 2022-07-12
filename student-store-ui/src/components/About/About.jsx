import * as React from "react"
import "./About.css"
import giant_codepathLogo from "/assets/giant_codepath.svg"
import {Link} from 'react-router-dom'

export default function About() {
    return (
      <div className="about">
          <div className="content">
          <h1>About</h1>
            <div className="summary">
            <div className="Text">
                <p>The codepath student store offers great products 
                    at great prices from a great team and for a great 
                    cause.
                </p>
                <p>
                    We've searched far and wide for items that perk 
                    the interests of even the most eccentric students
                     and decided to offer them all here in one place.
                </p>
                <p>
                All proceeds go towards bringing high quality CS education 
                to college students around the country.  
                </p>
            </div>
            <div class="media">
              <img src = {giant_codepathLogo}/>
            </div>
            </div>
          </div>
      </div>
    )
  }
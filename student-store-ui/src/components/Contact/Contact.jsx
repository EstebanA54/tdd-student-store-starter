import * as React from "react"
import "./Contact.css"

export default function Contact() {
    return (
      <div className="contact">
          <div className="content">
            <h1>Contact</h1>
            <div className="summary">
                <ul className="info">
                    <li>
                        <span className="label">
                            Email:
                        </span>
                        <span> code@path.org</span>
                    </li>
                    <li>
                        <span class="label">Phone:</span>
                        <span> 1-800-CODEPATH</span>
                    </li>
                    <li>
                        <span class="label"></span>
                        <span> 123 Fake Street, San Francisco, CA</span>
                    </li>
                </ul>
            </div>
          </div>
        
      </div>
    )
  }
import React from 'react'
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div>
      <section class="footer-container-section">
          <p>
             Copyright &copy; {new Date().getFullYear()} 
          </p>
        </section>
    </div>
  )
}

export default Footer

import React from 'react'
import './footer.css'
import Footer1 from './footer-1/Footer1'
import Footer2 from './footer-2/Footer2'

function Footer() {
  return (
    <>
    <section className='footer-section'>
        <Footer1 />
        <Footer2 />
    </section>
    <div className='copyright'>
    <p>© 2024 <a href="https://metrictreelabs.com/">Metric Tree Labs</a>, All Rights Reserved</p>
  </div>
  </>
  )
}

export default Footer

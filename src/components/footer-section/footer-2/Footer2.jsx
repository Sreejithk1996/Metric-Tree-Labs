import React from 'react'
import mtl from '../../../assets/large_image/mtl-logo.png'
import youtube from '../../../assets/small_image/Youtube.png'
import facebook from '../../../assets/small_image/Facebook.png'
import instagram from '../../../assets/small_image/Instagram.png'
import linkedin from '../../../assets/small_image/Linkin.png'
import map from '../../../assets/large_image/world-map.svg'

function Footer2() {
  return (
    <>
    <div className='footer-2'>
        <div className='mtl-social'>
            <div className='mtl-social-logo'>
                <img src={mtl} alt='img'></img>
            </div>
            <div className='mtl-social-quote'>
                <div className='quote'>
                    <p>Fuelling smarter business</p> 
                    <p>decision by creating unique</p> 
                    <p>product experiences...</p>
                </div>
                <div className='social-icons'>
                    <img src={youtube} alt="youtube-icon" />
                    <img src={facebook} alt="facebook-icon" />
                    <img src={instagram} alt="instagram-icon" />
                    <img src={linkedin} alt="linkedin-icon" />
                </div>
            </div>
        </div>
        <div className='mtl-contact'>
            <div className='mtl-contact-1'>
                <p><label>For Jobs and Internships</label></p>
                <p>+91 6238903365</p>
                <p>sales@metrictreelabs.com</p>
            </div>
            <div className='mtl-contact-2'>
                <p><label>For Sales Enquiry</label></p>
                <p>+91 6238903365</p>
                <p>sales@metrictreelabs.com</p>
            </div>
        </div>
        <div className='mtl-uk-address'>
                <p>Metric Tree Labs Pvt.Ltd</p>
                <p>71-75 Shelton Street</p>
                <p>Covent Garden</p>
                <p>London, WC2H9JO</p>
                <p>UNITED KINGDOM</p>
        </div>
        <div className='mtl-india-address'>
                <p>Metric Tree Labs Pvt.Ltd</p>
                <p> 7 Providence,</p>
                <p>Mahakavi Vailoppilli Rd,</p>
                <p>Palarivattom,</p>
                <p>Ernakulam, Kerala 682025</p>
        </div>
    </div>
    <div className='world-map'>
        <img src={map} alt="world-map" />
    </div>
    </>
  )
}

export default Footer2

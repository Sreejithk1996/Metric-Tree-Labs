import React from 'react'
import './Banner.css'
import sphere from '../../assets/round.png'
import mtl from '../../assets/large_image/mtl-logo.png'
import phone1 from '../../assets/large_image/mob-banner1.svg'
import phone2 from '../../assets/large_image/mob-banner2.svg'
import smallsphere from '../../assets/large_image/Small Sphere.png'
import android from '../../assets/small_image/android.svg'
import windows from '../../assets/small_image/windows.svg'
import figma from '../../assets/small_image/figma.svg'
import react from '../../assets/small_image/react.svg'
import ios from '../../assets/small_image/ios.svg'
import techicon from '../../assets/small_image/list-icon.svg'


function Banner() {
  return (
    <section className='banner-section'>

      <div className='header-section '>
        <div className='logo'>
          <img src={mtl} alt='img'></img>
        </div>
        <div className='launch'>
          <button className='launch-project'>Launch your project<i class="fa-solid fa-arrow-right" style={{color: '#ffffff'}} /></button>
        </div>
      </div>

      <div className='banner-content'>
        <div className='bc-1'>
            <div className='banner-title'>
              <p>Mobile</p>
              <p className='color'>App Development</p>
              <p>Company</p>
            </div>
            <div className='banner-title-content'>
              <p>We build scalable enterprise-grade<br />
                mobile applications for businesses of all sizes</p>
            </div>
            <div className='banner-button'>
              <button>Start your project<i class="fa-solid fa-arrow-right" style={{color: '#ffffff'}} /></button>
            </div>
        </div>
        <div className='bc-2'>
          <div className='round'>
            <img src={sphere} alt="img" />
          </div>
          <div className='banner-phone'>
            <img className='phone1' src={phone1} alt='phoneimg'></img>
            <img className='phone2' src={phone2} alt='phoneimg'></img>
          </div>
          <button className='explore'>Explore More</button>
          <button className='started'>Get Started</button>
          <img className='sphere' src={smallsphere} alt='sphere'></img>
          <img className='android' src={android} alt='android'></img>
          <img className='windows' src={windows} alt='windows'></img>
          <img className='figma ' src={figma } alt='figma '></img>
          <img className='react' src={react} alt='react'></img>
          <img className='ios' src={ios} alt='ios'></img>
        </div>
      </div>

      <div className='banner-tech'>
        <p className='tech1'>IOS</p>
        <img src={techicon} alt='icon'></img>
        <p className='tech1'>ANDROID</p>
        <img src={techicon} alt='icon'></img>
        <p className='tech1'>Flutter</p>
        <img src={techicon} alt='icon'></img>
        <p className='tech1'>REACT NATIVE</p>
      </div>
      
    </section>
  )
}

export default Banner

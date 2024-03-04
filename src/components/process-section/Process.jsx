import React from 'react'
import './process.css'
import mobiletop from '../../assets/small_image/mob-bg-top.svg'
import homebar from '../../assets/small_image/True.svg'

function Process() {
  return (
   <section className='process-section'>
        <div className='process-content'>
            <div className='pc-1'>
                <div className='process-title'>
                    <p>Our</p><label>Process</label>
                </div>
                <div className='process-title-content'>
                    <p>Superior processes, world-class user experience designs, rapid application development, and the best after-deployment services are the marks of the best mobile app development practices in place and we are proud to be one of the top mobile app development companies in business today. </p>
                </div>
                <div className='process-title-button'>
                        <button>Start your project<i class="fa-solid fa-arrow-right" style={{color: '#ffffff'}} /></button>
                </div>
            </div>
            <div className='pc-2'>
                <div className='mobile-process-list'>
                    <div className='mobile-topbar'>
                        <img src={mobiletop} alt='mobiletop'></img>
                    </div>
                    <div className='mobile-list'>
                        <ul className='list-content'>
                            <li className='list-1'><p>01</p><p>Analyze</p></li>
                            <li className='list-1'><p>02</p><p>Design</p></li>
                            <li className='list-1'><p>03</p><p>Develop</p></li>
                            <li className='list-1'><p>04</p><p>Test</p></li>
                            <li className='list-1'><p>05</p><p>Deploy</p></li>
                            <li className='list-1'><p>06</p><p>Support</p></li>
                        </ul>
                    </div>
                    <div className='bottom-bar'>
                        <img src={homebar} alt="homebar" />
                    </div>
                </div>
            </div>
        </div>  
   </section>
  )
}

export default Process

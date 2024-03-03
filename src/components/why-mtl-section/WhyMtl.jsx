import React from 'react'
import './WhyMtl.css'
import whymtlimage from '../../assets/large_image/Why Choose MTL_.png'
import content1 from '../../assets/large_image/whymtl 1.png'
import content2 from '../../assets/large_image/whymtl 2.png'
import light from '../../assets/small_image/Vector.svg'

function WhyMtl() {
  return (
    <section className='whymtl-section'>
        <div className='choose-mtl'>
            <div className='whymtl-title'>
                <p>Why Choose</p><label>MTL?</label>
            </div>
            <div className='whymtl-title-content'>
                <p>Superior processes, world-class user experience designs, rapid application development, and the best after-deployment services are the marks of the best mobile app development practices in place and we are proud to be one of the top mobile app development companies in business today. </p>
            </div>
        </div>
        <div className='whymtl-image'>
            <img src={whymtlimage} alt="img" />
        </div>
        <div className='whymtl-content'>
            <div className='whymtl-content-1'>
                <div className='list-content'>
                    <div className='list'>
                        <img src={light} alt="img" />
                        <p>Dedicated team for each project</p>
                    </div>
                    <div className='list'>
                        <img src={light} alt="img" />
                        <p>Industry-specific apps</p>
                    </div>
                    <div className='list'>
                        <img src={light} alt="img" />
                        <p>Secure transactions</p>
                    </div>
                    <div className='list'>
                        <img src={light} alt="img" /> 
                        <p>Timely development</p>
                    </div>  
                </div>
            </div>
            <div className='whymtl-content-2'>
                <div className='list-content'>
                    <div className='list'>
                        <img src={light} alt="img" />
                        <p>Budget-friendly development</p>
                    </div>
                    <div className='list'>
                        <img src={light} alt="img" />
                        <p>User-friendly designing</p>
                    </div>
                    <div className='list'>
                        <img src={light} alt="img" />
                        <p>Unwavering delivery schedule</p>
                    </div>
                    <div className='list'>
                        <img src={light} alt="img" /> 
                        <p>Enhancements as necessary</p>
                    </div>  
                </div>
            </div>

        </div>
    </section>
  )
}

export default WhyMtl

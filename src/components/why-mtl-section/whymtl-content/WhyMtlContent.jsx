import React from 'react'
import light from '../../../assets/small_image/Vector.svg'
import icon1 from '../../../assets/small_image/icon1.svg'
import icon2 from '../../../assets/small_image/icon2.svg'

function WhyMtlContent() {
  return (
        
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
                <img className='icon' src={icon1} alt="icon" />
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
                <img className='icon' src={icon2} alt="icon" />
            </div>
        </div>
  )
}

export default WhyMtlContent

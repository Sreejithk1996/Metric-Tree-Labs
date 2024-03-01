import React from 'react'
import './Process.css'
import clinictopics from '../../assets/large_image/clinictopics.svg'
import bimex from '../../assets/large_image/bimex.svg'
import sitrex from '../../assets/large_image/siterx.svg'
import yalla from '../../assets/large_image/yallatoys.svg'
import magic from '../../assets/large_image/magicrewards.svg'

function Process() {
  return (
        <>
        
        <section className='project-section'>
            <div className='project-1'>
                <div className='clinic'>
                    <img src={clinictopics} alt='img'></img>
                    <div className='details-1 details'>
                        <h6>CLINICTOPICS</h6>
                        <p>React Native, Django, React.JS</p>
                    </div>
                </div>
                <div className='ourprojects'>
                    <p>Our</p><label>Projects</label>
                </div>
                <div className='bim'>
                    <img src={bimex} alt='img'></img>
                    <div className='details-2 details'>
                        <h6>BIMEX</h6>
                        <p>React Native, Django, React.JS</p>
                    </div>
                </div>
            </div>
            <div className='project-2'>
                <div className='sit'>
                    <img src={sitrex} alt='img'></img>
                    <div className='details-3 details'>
                        <h6>SITREX</h6>
                        <p>React Native, Django, React.JS</p>
                    </div>
                </div>
                <div className='yal'>
                    <img src={yalla} alt='img'></img>
                    <div className='details-4 yal-style'>
                        <h6>YALLATOYS</h6>
                        <p>React Native, Django, React.JS</p>
                    </div>
                </div>
                <div className='mag'>
                    <img src={magic} alt='img'></img>
                    <div className='details-5 details'>
                        <h6>MAGICREWARDS</h6>
                        <p>React Native, Django, React.JS</p>
                    </div>
                </div>
            </div>
        </section>

        </>
  )
}

export default Process

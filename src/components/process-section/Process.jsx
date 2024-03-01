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
                </div>
                <div className='ourprojects'>
                    <p>Our</p><label>Projects</label>
                </div>
                <div className='bim'>
                    <img src={bimex} alt='img'></img>
                </div>
            </div>
            <div className='project-2'>
                <div className='sit'>
                    <img src={sitrex} alt='img'></img>
                </div>
                <div className='yal'>
                    <img src={yalla} alt='img'></img>
                </div>
                <div className='mag'>
                    <img src={magic} alt='img'></img>
                </div>
            </div>
        </section>

        </>
  )
}

export default Process

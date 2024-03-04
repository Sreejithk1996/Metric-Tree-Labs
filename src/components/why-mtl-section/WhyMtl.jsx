import React from 'react'
import ChooseMTL  from './choose-mtl/ChooseMTL'
import WhyMtlImage from './whymtl-image/WhyMtlImage'
import WhyMtlContent from './whymtl-content/WhyMtlContent'
import './WhyMtl.css'


function WhyMtl() {
  return (
    <section className='whymtl-section'>
        <ChooseMTL />
        <WhyMtlImage />
        <WhyMtlContent />
    </section>
  )
}

export default WhyMtl

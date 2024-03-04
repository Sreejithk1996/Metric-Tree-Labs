import React from 'react'
import './HomePage.css';
import Banner from '../components/banner-section/Banner';
import Projects from '../components/projects-section/Projects'
import WhyMtl from '../components/why-mtl-section/WhyMtl';
import Process from '../components/process-section/Process';

function HomePage() {
  return (
    <div className='main-body'>
      <div className='main-sub-body'>
        <Banner />
        <Projects />
        <WhyMtl />
        <Process />
      </div>
    </div>
  )
}

export default HomePage

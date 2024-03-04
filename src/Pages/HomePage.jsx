import React from 'react'
import './HomePage.css';
import Banner from '../components/banner-section/Banner';
import Projects from '../components/projects-section/Projects'
import WhyMtl from '../components/why-mtl-section/WhyMtl';

function HomePage() {
  return (
    <div className='main-body'>
      <div className='main-sub-body'>
        <Banner />
        <Projects />
        <WhyMtl />
      </div>
    </div>
  )
}

export default HomePage

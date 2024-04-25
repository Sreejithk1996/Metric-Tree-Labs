import React from 'react'
import './HomePage.css';
import Banner from '../components/banner-section/Banner';
import Projects from '../components/projects-section/Projects'
import WhyMtl from '../components/why-mtl-section/WhyMtl';
import Process from '../components/process-section/Process';
import ClientTest from '../components/client-test-section/ClientTest';
import Footer from '../components/footer-section/Footer';

function HomePage() {
  return (
    <div className='main-body'>
      <div className='main-sub-body'>
        <Banner />
        <Projects />
        <WhyMtl />
        <Process />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage

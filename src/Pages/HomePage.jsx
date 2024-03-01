import React from 'react'
import './HomePage.css';
import Banner from '../components/banner-section/Banner';
import Process from '../components/process-section/Process';

function HomePage() {
  return (
    <div className='main-body'>
      <div className='main-sub-body'>
        <Banner />
        <Process />
      </div>
    </div>
  )
}

export default HomePage

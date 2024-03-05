import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './ClientTest.css'
import client1 from '../../assets/large_image/joshua.png'
import client2 from '../../assets/large_image/ranjith.png'
import client3 from '../../assets/large_image/manoj.png'
import client4 from '../../assets/large_image/mark.png'

function ClientTest() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='slide-1'>
                <img src={client1} alt="img" />
                <p>Joshua Wegener</p>
                <p>Tuna Group</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-1'>
                <img src={client2} alt="img" />
                <p>Ranjith Antony</p>
                <p>Perleybrook Labs LLC</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-1'>
                <img src={client3} alt="img" />
                <p>Manoj Pooleery</p>
                <p>CTO @ SiteRx</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-1'>
                <img src={client4} alt="img" />
                <p>Mark Howard</p>
                <p>Director @ Zimbly Eat Technologies, Ireland</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ClientTest

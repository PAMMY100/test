import React from 'react'
import { Link } from 'react-router-dom'
import './AdevrtHero.css'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import img1 from '../../assets/Male-models/m16.webp'
import img2 from '../../assets/Female-models/f3.jpeg'
import img3 from '../../assets/Male-models/m2.jpeg'
import img4 from '../../assets/Female-models/f11.webp'
import img5 from '../../assets/Male-models/m11.webp'
import img6 from '../../assets/Female-models/f4.jpeg'



const slider = [
  {
    title: 'Male model',
    desription: '',
    url: img1,
  },
  {
    title: 'Female model',
    desription: '',
    url: img2,
  },
  {
    title: 'Male model',
    desription: '',
    url: img3,
  },
  {
    title: 'Female model',
    desription: '',
    url: img4,
  },
  {
    title: 'Male model',
    desription: '',
    url: img5,
  },
  {
    title: 'Female model',
    desription: '',
    url: img6,
  },
]
const AdvertHero = () => {
  return (
    <div className='container'>
      <div>
        <div className='hero-content'>
          <span>discover</span>
          <h1>Models gallery</h1>
          <hr />
          <p>We capture moment you can't envisage</p>
          <Link to='/login'><p className='slider-btn'>explore</p></Link>
        </div>
      </div>
      <Swiper 
      className='myswiper'
      modules={[Pagination, EffectCoverflow, Autoplay]}
      effect={"coverflow"}
      grabCursor = {true}
      centeredSlides= {true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
      }}
      loop={true}
      pagination={{clickable: true}}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      breakpoints={{
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 2
        },
        1560: {
          slidesPerView: 3
        }
      }}
      >
        {
          slider.map(data => (
            <SwiperSlide style={{ backgroundImage: `url(${data.url})`}} className='myswiper-slider' >
              <div key={data.title}>
                <h2>{data.title}</h2>
                <p>{data.desription}</p>
                <Link to='/login' className='slider-btn'>explore</Link>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default AdvertHero

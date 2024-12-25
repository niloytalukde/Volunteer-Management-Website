import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import bgimg1 from '../assets/banner1.jpg'
import bgimg2 from '../assets/banner2.jpg'
import bgimg3 from '../assets/banner3.jpg'
import Slide from './Slide'

const Banner = () => {
    return (
      <div className='container  mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Simplify Volunteer Coordination with Ease'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Transforming Volunteer Efforts into Lasting Results'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Streamlined Volunteer Solutions for Nonprofits'
          />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;
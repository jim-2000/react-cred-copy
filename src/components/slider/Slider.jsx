import { Navigation, Pagination, Scrollbar, A11y,Autoplay, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import 'swiper/css/bundle';
//
const sliderData =[
    {
        name: "ranesh bhattacharya",
        text: "this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"
    },
    {
        name: "ranesh bhattacharya",
        text: "this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"
    },
    {
        name: "ranesh bhattacharya",
        text: "this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"
    },
    {
        name: "ranesh bhattacharya",
        text: "this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"
    },
]

const Slider = () => {
  return (
    <div className='max-width' style={{marginBottom:"20px", }}>
        <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1.}
            pagination={{ 
                clickable: true,
                enabled: true,    
                bulletClass: 'swiper-pagination-bullet',      
             }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop
        
        >
            {
                sliderData.map((item, index) => {
                    return (
                        <SwiperSlide
                        
                        >
                            <div className="flex flex-col" style={{textAlign:"center", padding:"10px 0px"}}>
                                <h2>"{item.text}"</h2>
                                <h4 style={{marginBottom:"15px",paddingBottom:"15px"}} >{item.name}</h4>
                            </div>
                        </SwiperSlide>

                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default Slider
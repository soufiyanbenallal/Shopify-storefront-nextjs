import React, { useState,useEffect } from 'react';
import SwiperCore, {  Navigation, Pagination,Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';// Import Swiper styles
import ReactImageMagnify from 'react-image-magnify';
import LightboxComponent from "./Lightbox";


SwiperCore.use([Navigation,Thumbs, Pagination]);
function Carousel({images}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [imageLightbox, setimageLightbox] = useState([])
    const [isOpen, setisOpen] = useState(false)
    useEffect(() => {
      let list = []
      console.log(list);
      images.map(i=>{
        list.push(i.src)
      })
      setimageLightbox(list)
    }, [])
  
    return (
      <div >
        { (imageLightbox.length  > 0 && isOpen) && <LightboxComponent images={imageLightbox} index={0} setisOpen={setisOpen} />}
        <Swiper className="gallery-top" thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={1}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
        >
          {
            images.map((image,i)=>(
              <SwiperSlide key={i} onClick={()=>setisOpen(true)} >
                <ReactImageMagnify {...{
                  smallImage: {
                      alt: 'image',
                      isFluidWidth: true,
                      src: image.src
                  },
                  largeImage: {
                      src: image.src,
                      width: 1200,
                      height: 1200
                  },
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  enlargedImagePosition: 'over'
              }} />
              </SwiperSlide>
  
            ))
          }
        </Swiper>
        <Swiper
          className="gallery-thumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={7}
          onSlideChange={() => console.log('slide change')}
          style={{marginTop:6}}
        >
          {
            images.map((image,i)=>(
              <SwiperSlide key={i}>
                <img style={{width:"100%"}} src={image.src} alt="#" />
              </SwiperSlide>
  
            ))
          }
          {/* <SwiperSlide>
            <img style={{width:"100%"}} src="https://i.picsum.photos/id/28/600/600.jpg?hmac=SuloWf7YCrCc9v7w-wWZs1uxz3y6xdvbjYj9vWzptr4" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{width:"100%"}} src="https://i.picsum.photos/id/28/600/600.jpg?hmac=SuloWf7YCrCc9v7w-wWZs1uxz3y6xdvbjYj9vWzptr4" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{width:"100%"}} src="https://i.picsum.photos/id/28/600/600.jpg?hmac=SuloWf7YCrCc9v7w-wWZs1uxz3y6xdvbjYj9vWzptr4" alt="#" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{width:"100%"}} src="https://i.picsum.photos/id/28/600/600.jpg?hmac=SuloWf7YCrCc9v7w-wWZs1uxz3y6xdvbjYj9vWzptr4" alt="#" />
          </SwiperSlide> */}
        </Swiper>
    </div>
    );
}

export default Carousel
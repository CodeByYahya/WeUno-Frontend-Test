/* eslint-disable react/prop-types */
import { useRef } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TicketCarousel = (props) => {
  const { settings, images,width } = props;
  // Create a reference to the Slider
  const sliderRef = useRef(null);



  const handleImageClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="w-[115%] sm:w-full ms-0 sm:ms-14 flex justify-end overflow-hidden">
      <Slider className={'w-full  '+width} {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className={`relative ${image.size === 'small' ? 'h-96 sm:h-[400px]' : 'h-96 sm:h-[480px]'} px-3  mb-10 sm:px-1 focus:outline-none`} // Tailwind classes for height and padding
            onClick={() => handleImageClick(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-contain  cursor-pointer" 
            />
            <div className="absolute bottom-[10px] font-serif text-2xl sm:bottom-[-35px] left-1/2 transform -translate-x-1/2 text-white text-center">
              {image.text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TicketCarousel;

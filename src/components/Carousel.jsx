/* eslint-disable react/prop-types */
import { useRef } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  const { settings, images, width } = props;
  const sliderRef = useRef(null);

  const handleImageClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  console.log(width)

  return (
    <div className="w-[115%] sm:w-full ms-5 md-0 flex justify-end overflow-hidden">
      <Slider className={'w-full  '+width} {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`!flex flex-col justify-center items-center p-2 outline-none`} 
            onClick={() => handleImageClick(index)}
          >
            {/* Image with different widths based on size */}
            <img
              src={image.src}
              alt={image.alt}
              className={`flex cursor-pointer object-cove ${ image.size === 'small' ? 'w-full md:w-[90%]' : 'w-full'}`}
              style={{
                height:"auto",
              }}
            />

            {/* Text Positioned 20px below the Image */}
            <div
              className="w-full flex justify-center"
              style={{
              
              }}
            >
             <h3 className=' text-white text-center font-serif text-2xl w-[70%]'>{image.text}</h3> 
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

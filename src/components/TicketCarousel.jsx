import { useRef } from 'react';
import Slider from 'react-slick';
import Swipe1 from "../assets/SwipeImage1.png";
import Swipe2 from "../assets/SwipeImage2.png";
import Swipe3 from "../assets/SwipeImage3.png";
import Swipe4 from "../assets/SwipeImage4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TicketCarousel = () => {
  // Create a reference to the Slider
  const sliderRef = useRef(null);

  // Settings for the carousel
  const settings = {
    dots: false, // Disable dots
    arrows: false, // Disable arrows
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 2000,   // Time between each auto slide (in milliseconds)
    centerMode: true,
    centerPadding: '-5%', // Adjust if needed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
           centerPadding: '100'
        }
      }
    ]
  };

  // Images data array
  const images = [
    { id: 1, src: Swipe1, alt: 'Image 1', size: 'small', text: 'Little Krazy' },
    { id: 2, src: Swipe2, alt: 'Image 2', size: 'big', text: 'Swipe Image 2' },
    { id: 3, src: Swipe3, alt: 'Image 3', size: 'small', text: 'Swipe Image 3' },
    { id: 4, src: Swipe4, alt: 'Image 4', size: 'big', text: 'Swipe Image 4' },
  ];

  // Function to handle image click
  const handleImageClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="w-[110%] sm:w-full ms-14 flex justify-end overflow-hidden">
      <Slider className='w-full  sm:w-[88vw]' {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className={`relative ${image.size === 'small' ? 'h-96' : 'h-[420px]'} px-3  mb-10 sm:px-1 focus:outline-none`} // Tailwind classes for height and padding
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

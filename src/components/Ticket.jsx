import Button from "./Button"
import Carousel from "./Carousel"
import Swipe1 from "../assets/SwipeImage1.png";
import Swipe2 from "../assets/SwipeImage2.png";
import Swipe3 from "../assets/SwipeImage3.png";
import Swipe4 from "../assets/SwipeImage4.png";

const settings = {
  dots: false, // Disable dots
  arrows: false, // Disable arrows
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,        // Enable autoplay
  autoplaySpeed: 2000,   // Time between each auto slide (in milliseconds)
  centerMode: true,
  centerPadding: '-5%', // Adjust if needed
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
         centerPadding: '100'
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
         centerPadding: '100'
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
         centerPadding: '100'
      }
    },
 
  ]
};

// Images data array
const images = [
  { id: 1, src: Swipe1, alt: 'Image 1', size: 'big', text: 'Little Krazy' },
  { id: 2, src: Swipe2, alt: 'Image 2', size: 'small', text: 'Hawanimm Groves City' },
  { id: 3, src: Swipe3, alt: 'Image 3', size: 'big', text: 'Picnic Market' },
  { id: 4, src: Swipe4, alt: 'Image 4', size: 'small', text: 'Lucawong' },
];

const Task = () => {
  return (
    <div className="overflow-hidden flex flex-col mt-24 items-center">
      <div className="flex flex-col items-start justify-center mb-10  w-[90%] bg-red">
        <h2 className="text-white w-[80%] text-3xl sm:text-5xl font-serif">Book General Access ticket and enjoy the attractions for free</h2>
        <Button text="Book General Access Ticket"/>
      </div>
    <div className="w-full md:ms-6">
    <Carousel className="ms-20" settings={settings} images={images} width={"w-[88vw] "}/>
    </div>
      
    </div>
  )
}
export default Task 
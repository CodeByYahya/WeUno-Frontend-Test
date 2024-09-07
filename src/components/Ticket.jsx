import Button from "./Button"
import TicketCarousel from "./TicketCarousel"
import Swipe1 from "../assets/SwipeImage1.png";
import Swipe2 from "../assets/SwipeImage2.png";
import Swipe3 from "../assets/SwipeImage3.png";
import Swipe4 from "../assets/SwipeImage4.png";

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

const Task = () => {
  return (
    <div className="overflow-hidden flex flex-col mt-24 items-center">
      <div className="flex flex-col items-start justify-center mb-10  w-[90%] bg-red">
        <h2 className="text-white w-[80%] text-3xl sm:text-5xl font-serif">Book General Access ticket and enjoy the attractions for free</h2>
        <Button text="Book General Access Ticket"/>
      </div>
    <TicketCarousel settings={settings} images={images} width={"w-[88vw]"}/>
    </div>
  )
}
export default Task 
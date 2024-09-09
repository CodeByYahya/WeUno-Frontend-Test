import Carousel from "./Carousel";
import Swipe1 from "../assets/SwipeImage1.png";
import Swipe2 from "../assets/Experience.png";
import Swipe3 from "../assets/Event.png";
import Swipe4 from "../assets/SwipeImage4.png";
import Button from "./Button";

const settings = {
  dots: false, // Disable dots
  arrows: false, // Disable arrows
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Time between each auto slide (in milliseconds)
  centerMode: true,
  centerPadding: "-5%", // Adjust if needed
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "100",
      },
    },
  ],
};

// Images data array
const images = [
  { id: 1, src: Swipe1, alt: "Image 1", size: "small", text: "Restaurant" },
  { id: 2, src: Swipe2, alt: "Image 2", size: "big", text: "Experiences" },
  { id: 3, src: Swipe3, alt: "Image 3", size: "small", text: "Events" },
  { id: 4, src: Swipe4, alt: "Image 4", size: "big", text: "Lucawong" },
];
function Experience() {
  return (
    <div className="w-full flex flex-col flex-wrap md:flex-nowrap items-center overflow-hidden md:justify-between md:items-start md:mt-36 md:flex-row ">
      <div className="w-[90%] md:w-[25%] mb-10 ms-0 md:ms-20">
        <h2 className="text-white text-start mb-4 text-3xl w-[80%] md:w-full sm:text-5xl font-serif">
          Curate your experience as you like
        </h2>
          <Button text="Book Tickets" />
      </div>
      <div className="w-full  -md:right-10 overflow-hidden">
        {/* <TicketCarousel settings={settings} images={images} width={"w-full"} /> */}
    <Carousel settings={settings} images={images} width={"w-[88vw]"}/>

      </div>
    </div>
  );
}

export default Experience;

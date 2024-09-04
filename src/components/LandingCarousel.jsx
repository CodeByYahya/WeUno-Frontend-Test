import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BGImage from "../assets/BGImage.png";

const LandingCarousel = () => {
  return (
    <div className="relative "> {/* Set height to full screen */}
      {/* Overlay Text Container */}
      <div className="absolute z-10 top-0 left-0 h-full flex flex-col justify-center p-8 sm:p-16 w-[50%] bg-black/40">
        <p className="text-white text-sm mb-4">KhAWAJA YANI</p>
        <h1 className="text-white text-4xl w-[80%] sm:text-5xl font-serif font-semibold">
          The new <br /> era of luxury
        </h1>
        <p className="text-white mt-4 max-w-md font-sans">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum.
        </p>
        <button className="mt-8 self-start bg-[#c7a361] text-white font-sans font-semibold px-6 py-3 rounded-md">
          Book reservation now 
        </button>
      </div>

      {/* Carousel */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        className="h-full"
      >
        <div>
          <img
            src={BGImage}
            alt="Luxury"
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <img
            src={BGImage}
            alt="Luxury"
            className="object-cover h-full w-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default LandingCarousel;

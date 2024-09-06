import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BGImage from "../assets/BGImage.png";
import Button from "./Button";

const LandingCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute z-10 top-0 left-0 h-full w-full flex flex-col justify-center p-4 sm:p-16 sm:w-[50%] bg-black/50 sm:bg-blaclack/40">
        <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
          KhAWAJA YANI
        </p>
        <h1 className="text-white text-5xl sm:text-5xl font-serif font-semibold w-full sm:w-[80%]">
          The new <br /> era of luxury
        </h1>
        <p className="text-white mt-4 text-xs sm:text-base font-sans max-w-xs sm:max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum.
        </p>
      <Button text={"Book reservation now"}/>
      </div>
      {/* Carousel */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        className="relative h-full"
      >
        <div className="relative h-screen w-full">
          <img
            src={BGImage}
            alt="Luxury"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="relative h-screen w-full">
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

import MapImg from "../assets/Map.png";
import Button from "./Button";

function Map() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] flex justify-between items-center">
        <div className="w-[50%] flex justify-end">
          <img src={MapImg} alt="" className="h-[50%]" />
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="w-full flex flex-col justify-center p-4 sm:p-16">
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
            <Button text="Open the Map" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;

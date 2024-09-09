import MapImg from "../assets/Map.png";
import Button from "./Button";

function Map() {
  return (
    <div className="w-full flex justify-center items-center mt-16 md:mt-32">
      <div className="w-[90%] flex flex-wrap flex-col-reverse md:flex-row  justify-between items-center">
        <div className="w-full md:w-[50%] flex justify-end">
          <img src={MapImg} alt="" className="h-[50%]" />
        </div>
        <div className="w-full md:w-[50%] flex justify-center">
          <div className="w-full flex flex-col justify-center p-4 sm:px-16">
            <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
              Experience The Groves
            </p>
            <h1 className="text-white text-4xl sm:text-5xl font-serif w-full sm:w-[80%]">
             Find Your Place
            </h1>
            <p className="text-white mt-4 text-xs sm:text-base font-sans max-w-xs sm:max-w-md">
             Our interactive map will show you the way to the shops and restaraunts that you want to see.
            </p>
            <Button text="Open the Map" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;

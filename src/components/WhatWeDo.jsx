import BG from "../assets/BG2.png";
import Play from "../assets/Play.png";
const WhatWeDo = () => {
  return (
    <div className="w-full flex my-10 flex-col items-center">
      <div className="w-[90%] sm:w-6/12 mb-10">
        <h2 className="text-white text-center mb-4 text-3xl sm:text-5xl font-serif ">
          Mall Of: Endless Possibilites
        </h2>
        <p className="text-white text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quo et
          saepe distinctio fugiat molestiae natus quis totam temporibus sequi
          aliquam quidem, repudiandae ipsam praesentium sit? Veniam distinctio
          saepe ipsum voluptatem at corrupti odio natus.
        </p>
      </div>
      <div className="flex  relative justify-center">
        <img src={BG} alt="what we do" className="w-[90%] sm:w-1/2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4  bg-white p-2">
          <img src={Play} alt="play" className="w-10 ps-2 h-10" />
        </div>
      </div>
      <div className=" w-[90%] sm:w-1/2 p-4 bg-custom-light rounded-lg shadow-lg">
        <h3 className="text-sm text-white font-semibold uppercase">mall of</h3>
        <h2 className="text-3xl text-white font-serif font-bold">Endless Possibilities</h2>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          placeat, quas, quos, voluptates, quae, quidem, quibusdam, quod,
          voluptatibus, quae, quod, voluptatibus, quae, quod, voluptatibus,
          quae, quod, voluptatibus, quae, quod, voluptatibus, quae, quod,
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;

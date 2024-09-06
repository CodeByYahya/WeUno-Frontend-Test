import BG from "../assets/BG2.png";
import Play from "../assets/Play.png";
const WhatWeDo = () => {
  return (
    <div className="w-full flex my-10 flex-col items-center">
      <div className="w-[90%] sm:w-[70%] mb-10">
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
        <img src={BG} alt="what we do" className="w-[90%] sm:w-[70%]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4  bg-white p-2">
          <img src={Play} alt="play" className="w-10 ps-2 h-10" />
        </div>
      </div>
      <div className="flex  flex-col sm:flex-row justify-between w-[90%] sm:w-[70%] p-4 bg-custom-light rounded-lg shadow-lg">
        <div className="w-[80%]">
          <h3 className="text-[12px] text-white font-light uppercase">
            25 SR/Guest
          </h3>
          <h2 className="text-2xl my-3 text-white font-serif ">
            Get Your General Access Ticket
          </h2>
          <p className="text-[10px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            placeat, quas, quos, voluptates, quae, quidem, quibusdam, quod,
            voluptatibus, quae, quod, voluptatibus.
          </p>
        </div>
        <div className="flex items-center justify-end sm:justify-center">
          <svg
            className="w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

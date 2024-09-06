import TicketCarousel from "./TicketCarousel";

function Experience() {
  return (
    <div className="w-full flex">
      <div className="w-[90%] sm:w-[40%] mb-10">
        <h2 className="text-white text-center mb-4 text-3xl sm:text-5xl font-serif">
          Mall Of: Endless Possibilites
        </h2>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quo et
          saepe distinctio fugiat molestiae natus quis totam temporibus sequi
          aliquam quidem, repudiandae ipsam praesentium sit? Veniam distinctio
          saepe ipsum voluptatem at corrupti odio natus.
        </p>
      </div>
      <div className="w-[50%]">
        <TicketCarousel />
      </div>
    </div>
  );
}

export default Experience;

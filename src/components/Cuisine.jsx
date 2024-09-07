
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import Card4 from "../assets/Card4.png";

const cards = [
  { id: 1, title: "Vida Vera", price: "100 SR", image: Card1 },
  { id: 2, title: "Vida Vera", price: "100 SR", image: Card2 },
  { id: 3, title: "Vida Vera", price: "100 SR", image: Card3 },
  { id: 4, title: "Vida Vera", price: "100 SR", image: Card4 }
];

function Cuisine() {
  return (
    <div className="w-full flex my-10 flex-col items-center">
      <div className="w-[90%] sm:w-[70%] mb-10">
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
      <div className="grid grid-cols-1 place-items-center w-[90%] sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
        {cards.map(card => (
          <div key={card.id} className="max-w-lg p-2 bg-custom-light rounded-2xl overflow-hidden shadow-lg">
            <img className="w-full p-2" src={card.image} alt={card.title} />
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <div className="text-white font-serif text-2xl mb-2">{card.title}</div>
                <p className="text-white text-[12px] bg-[#c7a361] inline py-1 px-6 rounded-full">{card.price}</p>
              </div>
              <svg className="w-6 h-6 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cuisine;

import Button from "./Button"
import TicketCarousel from "./TicketCarousel"


const Task = () => {
  return (
    <div className="overflow-hidden flex flex-col mt-24 items-center">
      <div className="flex flex-col items-start justify-center mb-10  w-[90%] bg-red">
        <h2 className="text-white w-[80%] text-3xl sm:text-5xl font-serif">Book General Access ticket and enjoy the attractions for free</h2>
        <Button text={"Book General Access Ticket"}/>
      </div>
    <TicketCarousel />
    </div>
  )
}
export default Task 
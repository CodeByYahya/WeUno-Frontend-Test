import LandingCarousel from "./components/LandingCarousel"
import "./App.css"
import Navbar from "./components/Navbar"
import WhatWeDo from "./components/WhatWeDo"
import  Task from "./components/Ticket"
import Cuisine from "./components/Cuisine"
import Experience from "./components/Experience"
import Map from "./components/Map"

function App() {


  return (
    <div className="bg-custom-gradient min-h-screen">
    <Navbar/>
    <LandingCarousel/>
    <WhatWeDo/>
    <Task/>
    <Cuisine/>
    <Experience/>
    <Map/>
    </div>
  )
}

export default App

import LandingCarousel from "./components/LandingCarousel"
import "./App.css"
import Navbar from "./components/Navbar"
import WhatWeDo from "./components/WhatWeDo"
import TaskCarousel from "./components/TaskCarousel"

function App() {


  return (
    <div className="bg-custom-gradient min-h-screen">
    <Navbar/>
    <LandingCarousel/>
    <WhatWeDo/>
    <TaskCarousel/>
    </div>
  )
}

export default App

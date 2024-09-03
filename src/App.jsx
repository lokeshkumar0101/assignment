import React from "react"
import Socials from './Components/Socials.jsx'
import Intro from "./Components/Intro.jsx"
import Gallery from "./Components/Gallery.jsx"
import { HiOutlineExternalLink } from "react-icons/hi";

function App() {

  const handleClick = (link) => {
    window.open("https://portfolio-website-ten-pi.vercel.app/", '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="h-screen w-full flex">
      <div className="h-full w-[40%] flex flex-col justify-center items-center border-r-2">
        <h3 className="text-2xl text-white font-bold mb-20">My Assignment</h3>
        <img className="h-60 mb-5 border-2 rounded-full" src="profileImg.png" alt="profile image" />
        <h3 className="text-2xl text-white font-bold mb-5 underline">Lokesh Kumar</h3>
        <Socials />
        <button onClick={handleClick}
          className="py-2 mt-4 px-4 flex justify-center items-center bg-black text-white text-sm font-bold rounded-2xl gap-2 hover:scale-105 hover:shadow-2xl hover:shadow-white active:scale-95 ease-in-out duration-100">Go to Website
          <HiOutlineExternalLink size={24} />
        </button>
      </div>
      <div className="h-full w-[60%] flex flex-col justify-center items-center gap-y-5">
        <Intro />
        <Gallery />

      </div>
    </div>
  )
}

export default App

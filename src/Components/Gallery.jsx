import React from 'react'
import { BsQuestionCircle } from "react-icons/bs";
import { BiGridVertical } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdAdd } from "react-icons/md";


const gallery = () => {

    const handleAddImage = () => {
        console.log("button clicked!!");

    }


    return (
        <div className='rounded-xl h-[250px] w-[550px] bg-[#444c57] flex'>
            <div className='h-full w-[7%] rounded-l-xl'>

                <div className='h-[60%] w-full flex flex-col items-center justify-between'>
                    <BsQuestionCircle className='text-3xl text-zinc-300 mt-4 ml-2 hover:cursor-pointer ' />
                    <BiGridVertical className='text-5xl text-zinc-300 mt-4 opacity-30 ' />
                </div>

            </div>
            <div className=' w-[93%] mr-3'>
                <nav className='mt-2 mx-1 py-2 text-white rounded-3xl flex justify-between px-3 '>
                    <a href="/" className='bg-black py-3 ease-in-out duration-300 hover:bg-[#323232] font-bold hover:shadow-2xl hover:shadow-black hover:scale-110 px-7 rounded-2xl'>Gallery</a>
                    <button
                        onClick={handleAddImage}
                        class="rounded-full shadow-light-button flex justify-center items-center px-4 py-3 font-extrabold text-sm text-white bg-[#444c57] hover:scale-105 active:scale-95 ease-in-out duration-200"
                    >
                        <MdAdd size={22} />
                        ADD IMAGE
                    </button>

                    <div className='gap-5 flex justify-center items-center text-5xl '>
                        <FaArrowLeft class="rounded-full shadow-light-button flex justify-center items-center p-4 font-extrabold text-white bg-[#24272d] hover:scale-110 active:scale-95 ease-in-out duration-200 " />
                        <FaArrowRight class="rounded-full shadow-light-button flex justify-center items-center p-4 font-extrabold text-white bg-[#24272d] hover:scale-110 active:scale-95 ease-in-out duration-200" />
                    </div>

                </nav>
                <div className="h-[60%] w-full mt-3 flex ml-3 gap-5 justify-start">
                    <div className="h-[92%] mt-1 hover:scale-105 ease-in-out duration-300 rounded-2xl w-36 bg-slate-400"></div>
                    <div className="h-[92%] mt-1 hover:scale-105 ease-in-out duration-300 rounded-2xl w-36 bg-slate-400"></div>
                    <div className="h-[92%] mt-1 hover:scale-105 ease-in-out duration-300 rounded-2xl w-36 bg-slate-400"></div>
                   
                </div>




            </div>

        </div>
    )
}

export default gallery
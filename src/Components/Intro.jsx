import React, { useState } from 'react';
import { BsQuestionCircle } from "react-icons/bs";
import { BiGridVertical } from "react-icons/bi";

const Intro = () => {
    const [activeSection, setActiveSection] = useState('about');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'about':
                return <div className='h-[100%] overflow-scroll pr-3 mx-3 text-white'>Hello! I'm Lokesh Kumar, a passionate Frontend Developer from Bulandshahr, Uttar Pradesh, India. <br /> <br /> With a strong foundation in HTML5, CSS, Tailwind CSS, JavaScript, and ReactJS, I specialize in crafting visually stunning and responsive websites that not only meet the client’s vision but also provide an exceptional user experience. <br /> <br />

                Currently, I am pursuing a Bachelor of Computer Applications (B.C.A) and am in my 5th semester at CCS University. My education, combined with hands-on experience, has equipped me with the skills to solve complex problems and keep up with the latest industry trends. I am committed to continuously improving my craft and staying ahead in the rapidly evolving world of web development. <br /> <br />
                
                Let's create something amazing together!</div>;
            case 'experience':
                return <div className='h-[100%] overflow-scroll pr-3 mx-3 text-white'>Experience content goes here. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eveniet! <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. A sunt unde commodi, magni asperiores molestiae ad exercitationem, tenetur perferendis officia odio, deleniti vitae fugiat nihil quisquam aliquid? Voluptates, explicabo fugiat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas consequuntur expedita, quaerat neque ipsum maxime a consectetur! Reprehenderit veniam, debitis quo, ea alias cupiditate enim velit necessitatibus tenetur iste accusantium!</div>;
            case 'recommended':
                return <div className='h-[100%] overflow-scroll pr-3 mx-3 text-white'>Recommended content goes here. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, magni. <br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa mollitia, eum odio consequuntur quas, quod facere, accusamus molestiae modi reiciendis architecto neque veritatis eaque? Dolor ad mollitia minima tenetur doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laboriosam. Consectetur praesentium distinctio nulla velit. Molestiae ipsa saepe inventore temporibus omnis placeat id tempora maiores, molestias necessitatibus dolore! Sint, totam.</div>;
            default:
                return null;
        }
    };

    return (
        <div className='rounded-xl h-[250px] w-[550px] bg-[#444c57] flex'>
            <div className='h-full w-[7%] rounded-l-xl'>
                <div className='h-[60%] w-full flex flex-col items-center justify-between'>
                    <BsQuestionCircle className='text-3xl text-zinc-300 mt-4 ml-2' />
                    <BiGridVertical className='text-5xl text-zinc-300 mt-4 opacity-30' />
                </div>
            </div>
            <div className='w-[93%] mr-3'>
                <nav className='mt-3 mx-3 py-2 bg-[#1b1c20] text-white rounded-3xl flex justify-between px-3'>
                    {['about', 'experience', 'recommended'].map((section) => (
                        <button
                            key={section}
                            onClick={() => handleNavClick(section)}
                            className={`py-2 ease-in-out duration-300 hover:bg-[#323232] font-bold hover:shadow-2xl hover:shadow-black hover:scale-110 px-7 rounded-2xl ${
                                activeSection === section ? 'bg-[#323232] scale-110 shadow-2xl shadow-black' : ''
                            }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </nav>
                <div className='h-[60%] overflow-scroll mt-3'>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Intro;
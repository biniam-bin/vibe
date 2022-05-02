import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai"
import { MdExplore } from "react-icons/md"
import { AiTwotoneShop } from "react-icons/ai"
import { AiTwotoneBank } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"


import { useNavigate, Link } from "react-router-dom";


export const openNav = () => {
    document.getElementById("mySidenav").style.width = "89%";
    document.getElementById("mySidenav").style.zIndex = "10000"
}
export const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("mySidenav").style.zIndex = "0"
}


const Sidebar = ({ startLoader, endLoader }) => {

    const [active, setActive] = useState("")
    let navigate = useNavigate();

    const navigator = async (e, name) => {
        e.preventDefault()
        setActive(name)
        closeNav()
        startLoader()
        await navigate(`/${name}`)
        endLoader()

    }
    return (
        <div id="mySidenav" className="sidebar bg-[#373d46] h-screen w-0 fixed z-50 top-0 right-0  flex flex-col md:hidden">
            <div className="sidebar-top w-full h-16 flex items-center">
                <CgClose onClick={closeNav} size={45} className="ml-2" />
            </div>
            <div className="sidebarbody  h-full">
                <div className="nav-links-container  h-full">
                    <ul className="nav-links text-3xl text-start flex flex-col  items-start b-blue-500 mt-14">
                        <li onClick={(e) => navigator(e, "")} on className={`nav-link py-3 pl-16 flex w-full ${active === "" && "bg-blue-500"}`}><AiFillHome className="mr-5" />  <span> Home</span></li>
                        <li onClick={(e) => navigator(e, "explore")} on className={`nav-link py-3 pl-16 flex w-full ${active === "explore" && "bg-blue-500"}`}><MdExplore className="mr-5" />  <span> Explore</span></li>
                        <li onClick={(e) => navigator(e, "market")} on className={`nav-link py-3 pl-16 flex w-full ${active === "market" && "bg-blue-500"}`}><AiTwotoneShop className="mr-5" />  <span> Market</span></li>
                        <li onClick={(e) => navigator(e, "bank")} on className={`nav-link py-3 pl-16 flex w-full ${active === "bank" && "bg-blue-500"}`}><AiTwotoneBank className="mr-5" />  <span> Bank</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Header = ({ startLoader, endLoader }) => {

    const [active, setActive] = useState("")
    
    let navigate = useNavigate();

    const navigator = async (name) => {
        // e.preventDefault()
        startLoader()
        await navigate(`/${name}`)
        setActive(name)
        endLoader()

    }
    return (
        <span>

            <div className="bg-[#2d333b] shadow-xl fixed top-0 header w-full h-14 flex items-center text-gray-300  px-2 md:px-5">
                <div className="header-left-container h-full flex items-center">
                    <div onClick={navigator} className="logo-section text-2xl">
                        Vibe
                    </div>
                    <div className="search-section">
                        <form >
                            <div className="search-input-wrapper rounded-md h-8 ml-6 w-64 bg-[#1c2128] flex items-center px-2 text-gray-400">
                                <input className="bg-transparent w-full focus:outline-none" placeholder="# Search" type="text" />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="header-right-container h-full w-3/5 ml-auto bg-re-500 items-center justify-start hidden md:flex">
                    <span onClick={() => navigator("")} className={`icon-container p-1 px-4 flex  items-end h-full mx-3 cursor-pointer rounded ${active === "" && "bg-[#1c2128] border-b-blue-500 border-b-4"} `}>
                        <AiFillHome className={` ${active === "" && "text-blue-500"} `} size={35} />
                    </span>
                    <span onClick={() => navigator("explore")} className={`icon-container p-1 px-4 flex  items-end h-full mx-3 cursor-pointer rounded ${active === "explore" && "bg-[#1c2128] border-b-blue-500 border-b-4"} `}>
                        <MdExplore className={` ${active === "explore" && "text-blue-500"} `} size={35} />
                    </span>
                    <span onClick={() => navigator("market")} className={`icon-container p-1 px-4 flex  items-end h-full mx-3 cursor-pointer rounded ${active === "market" && "bg-[#1c2128] border-b-blue-500 border-b-4"} `}>
                        <AiTwotoneShop className={` ${active === "market" && "text-blue-500"} `} size={35} />
                    </span>
                    <span onClick={() => navigator("bank")} className={`icon-container p-1 px-4 flex  items-end h-full mx-3 cursor-pointer rounded ${active === "bank" && "bg-[#1c2128] border-b-blue-500 border-b-4"} `}>
                        <AiTwotoneBank className={` ${active === "bank" && "text-blue-500"} `} size={35} />
                    </span>

                </div>

                <div className="header-mobile-right  w-full flex justify-end md:hidden">
                    <GiHamburgerMenu onClick={openNav} className=" m" size={25} />
                </div>
                <Sidebar startLoader={startLoader} endLoader={endLoader} />
            </div>
        </span>
    )
}

export default Header
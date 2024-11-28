import React, { useContext, useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { DataContext } from "../context/appContext.jsx";
import { NAVIGATION_LINKS } from '../constants/index.jsx';

const Navbar = () => {

    // let dataContext = useContext(DataContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuOpenHandler = () => {
        setIsMenuOpen(true);
    }

    const menuCloseHandler = () => {
        setIsMenuOpen(false);
    }

    const navlinkHandler = (e, ref) => {
        const targetSection = document.querySelector(ref);
        setIsMenuOpen(false);

        if (targetSection) {
            const offset = -200;
            const sectionPosition = targetSection.getBoundingClientRect().top;
            const scrollPosition = sectionPosition + window.scrollY + offset;
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            })
        }

    }

    return (
        <motion.div className="p-2 flex items-center justify-between fixed top-0 left-0 w-full z-10 bg-transparent backdrop-blur-md" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>

            {/* name section */}
            <motion.span className="text-white ml-4 text-2xl" initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}>PORTFOLIO</motion.span>

            {
                (window.innerWidth < 640) ?
                    (!isMenuOpen) ? <RiMenu3Fill className="text-white text-4xl mr-4" onClick={menuOpenHandler} /> : <IoClose className="text-white text-4xl mr-4" onClick={menuCloseHandler} />
                    : ""
            }

            <motion.div className="bg-red-300 backdrop-blur-md absolute top-full right-0 p-2 z-10 h-dvh w-full flex items-center justify-start flex-col" initial={{y:"-100%", opacity:0}} animate={{y:isMenuOpen ? 0 : "-130%", opacity:1}} transition={{duration:0.8, ease:"easeOut"}}>
                {
                    NAVIGATION_LINKS.map((eachNavlink) => <div className="text-lg py-4 px-4" onClick={(e) => navlinkHandler(e, eachNavlink.href)}>{eachNavlink.label}</div>)
                }
            </motion.div>



        </motion.div>
    )
}

export default Navbar;

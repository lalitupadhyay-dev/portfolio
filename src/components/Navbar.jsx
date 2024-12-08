import React, { useContext, useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { NAVIGATION_LINKS } from '../constants/index.jsx';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuOpenHandler = () => {
        setIsMenuOpen(true);
        document.querySelector("body").style.overflowY="hidden";
    }

    const menuCloseHandler = () => {
        setIsMenuOpen(false);
        document.querySelector("body").style.overflowY="auto";
    }

    const navlinkHandler = (e, ref) => {
        document.querySelector("body").style.overflowY="auto";
        const targetSection = document.querySelector(ref);
        setIsMenuOpen(false);

        if (targetSection) {
            const sectionPosition = targetSection.getBoundingClientRect().top;
            const scrollPosition = sectionPosition + window.scrollY - 200;
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
                // (window.innerWidth < 640) ?
                    (!isMenuOpen) ? <RiMenu3Fill className="text-white text-4xl mr-4" onClick={menuOpenHandler} /> : <IoClose className="text-white text-4xl mr-4" onClick={menuCloseHandler} />
                    // : ""
            }

            <motion.div className="bg-[var(--clr-1)] fixed top-full right-0 p-2 z-10 h-dvh w-full flex items-center justify-start flex-col" initial={{y:"-100%", opacity:0}} animate={{y:isMenuOpen ? 0 : "-130%", opacity:1}} transition={{duration:0.8, ease:"easeOut"}}>
                {
                    NAVIGATION_LINKS.map((eachNavlink, idx) => <div key={idx} className="text-lg py-4 px-4 cursor-pointer" onClick={(e) => navlinkHandler(e, eachNavlink.href)}>{eachNavlink.label}</div>)
                }
            </motion.div>



        </motion.div>
    )
}

export default Navbar;

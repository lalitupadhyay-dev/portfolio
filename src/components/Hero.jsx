import React, {useEffect} from 'react';
import { PROFILE } from '../constants/index.jsx';
import { motion } from "motion/react";

const Hero = () => {

  return (
    <div className="h-screen w-screen flex items-center justify-center">

      <div className="flex items-center justify-center flex-col text-center">
        <motion.span className="text-4xl font-bold ml-2 my-2 sm:text-9xl" initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}>{PROFILE.name}</motion.span>
        <motion.span className="t-shadow text-ld ml-2 my-2 sm:text-4xl sm:my-8" initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}>{PROFILE.role}</motion.span>
        <motion.span className="text-justify text-xs mx-2 sm:w-[75%] sm:text-xl" initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}>{PROFILE.subheading}</motion.span>
        {/* <motion.a className=" my-8 text-sm flex gap-1 rounded-full border border-pink-200/50 px-4 py-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2, ease: "easeOut" }}><span>Download Resume</span><RiArrowRightUpLine /></motion.a> */}
      </div>

    </div>
  )
}

export default Hero;

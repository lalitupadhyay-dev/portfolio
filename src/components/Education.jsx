import React, { useEffect } from 'react';
import { EDUCATION } from '../constants';
import { motion, useAnimation } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const EducationCard = (props) => {

    const controls = useAnimation();
    const [ref, inView] = useInView({threshold: 0});

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        else {
            controls.start('hidden');
        }
    }, [inView]);

    return(
        <motion.div ref={ref} className="flex flex-col mx-2 border border-purple-300/50 p-4 my-4 rounded-md sm:w-[40vw]" initial="hidden" animate={controls} variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}} transition={{duration: 0.8, ease: "easeOut"}}>
            <span className="font-bold">{props.cardData.degree}</span>
            <span className="text-sm text-purple-300 mb-4">{props.cardData.institution}</span>
            <span className="text-xs">{props.cardData.duration}</span>
        </motion.div>
    );
}

const Education = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({threshold: 0});

    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }
        else {
            controls.start("hidden");
        }
    }, [inView]);

    return (
        <section className="sm:mx-4" id="education-section">
            <motion.h2 ref={ref} initial="hidden" animate={controls} transition={{duration: 0.8, ease: "easeOut"}} variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}} className="text-3xl text-center underline decoration-2 underline-offset-8 my-8">EDUCATION</motion.h2>

            <div className="sm:grid sm:grid-cols-2 sm:justify-items-center">
                {
                    EDUCATION.map((eachEducation) => <EducationCard key={eachEducation.id} cardData={eachEducation}  />)
                }
            </div>

        </section>
    )
}

export default Education;

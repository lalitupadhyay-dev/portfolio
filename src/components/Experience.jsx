import React, { useEffect } from 'react';
import { EXPERIENCES } from "../constants/index.jsx";
import { motion, useAnimation } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const ExperienceCard = (props) => {

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

    return (
        <motion.div ref={ref} className="flex flex-col mx-2 border border-purple-300/50 p-4 rounded-md my-8" initial="hidden" animate={controls} variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}} transition={{duration: 0.8, ease: "easeOut"}}>
            <span className="text-xs">{props.cardData.date}</span>
            <div className="text-sm mb-2">
                <span className="font-bold">{props.cardData.role}</span> - <span className="text-purple-300">{props.cardData.company}</span>
            </div>
            <div>
                <strong className="text-sm">Description:</strong>
                <ul className="list-disc ml-3">
                    {
                        props.cardData.description.map((eachPoint, idx) => <li key={idx} className="text-xs text-justify my-2">{eachPoint}</li>)
                    }
                </ul>
            </div>
            <div>
                <strong className="text-sm">Tech Stack:</strong>
                <ul className="flex gap-x-4 flex-wrap">
                    {
                        props.cardData.techStack.map((eachPoint, idx) => <li key={idx} className="text-xs text-justify my-2 p-2 border border-pink-500/30 rounded-full b-shadow">{eachPoint}</li>)
                    }
                </ul>
            </div>
        </motion.div>
    );

}

const Experience = () => {

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
        <section className="sm:mx-4" id="experience-section">
            <motion.h2 ref={ref} initial="hidden" animate={controls} transition={{duration: 0.8, ease: "easeOut"}} variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}} className="text-3xl text-center underline decoration-2 underline-offset-8 my-8">WORK EXPERIENCE</motion.h2>

            <div className="sm:grid sm:grid-cols-2 sm:justify-items-center">
                {
                    EXPERIENCES.map((eachExperience) => <ExperienceCard key={eachExperience.id} cardData={eachExperience} />)
                }
            </div>

        </section>
    )
}

export default Experience;

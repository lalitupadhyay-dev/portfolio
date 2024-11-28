import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';
import { motion, useAnimation } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const ProjectCard = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        else {
            controls.start('hidden');
        }
    }, [inView])

    return (
        <motion.div ref={ref} className="border border-purple-300/50 mx-2 p-4 my-12 rounded-md" initial="hidden" animate={controls} variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <a href={props.cardData.link} target="_blank">
                <img className="rounded-md" src={props.cardData.imgSrc} />
            </a>
            <div className="mt-8">
                <h3 className="text-lg font-bold">{props.cardData.title}</h3>

                <p className="text-justify text-xs my-2">{props.cardData.description}</p>

                <div>
                    <strong>Technologies used:</strong>
                    <ul className="flex items-center justify-start gap-4 mt-2">
                        {
                            props.cardData.techStack.map((tech) => <li className="text-xs border border-pink-500/30 p-2 rounded-full b-shadow">{tech}</li>)
                        }
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

const Projects = () => {

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
        <section id="project-section">
            <motion.h2 ref={ref} initial="hidden" animate={controls} transition={{duration: 0.8, ease: "easeOut"}} variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}} className="text-3xl text-center underline decoration-2 underline-offset-8 mb-8">PROJECTS</motion.h2>
            <div>
                {
                    PROJECTS.map((eachProject) => <ProjectCard cardData={eachProject} />)
                }
            </div>
        </section>
    )
}

export default Projects;

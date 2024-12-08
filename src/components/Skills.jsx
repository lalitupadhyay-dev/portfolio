import React, { useEffect } from 'react';
import { SKILLS } from '../constants';
import { motion, useAnimation } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const SkillCard = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({threshold: 0});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else {
      controls.start("hidden");
    }

  }, [inView]);


  return (
    <motion.div ref={ref} className="flex items-center justify-center flex-col" initial="hidden" animate={controls} variants={{ hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}} transition={{duration: 0.8, ease: "easeOut"}}>
      {props.cardData.icon}
      <span>{props.cardData.name}</span>
    </motion.div>
  );
}

const Skills = () => {

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
    <section className="sm:mx-4" id="skill-section">

      <motion.h2 ref={ref} initial="hidden" animate={controls} transition={{duration: 0.8, ease: "easeOut"}} variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}} className="text-3xl text-center underline decoration-2 underline-offset-8 my-8">SKILLS</motion.h2>

        <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-5">
          {
            SKILLS.map((skill, idx) => <SkillCard key={idx} cardData={skill} />)
          }
        </div>
      
    </section>
  )
}

export default Skills

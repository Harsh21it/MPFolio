import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion";
import profilePic from "../assets/harsh.jpeg";
import portfolio from "../assets/Portfolio.pdf";

const container= (delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0, opacity: 1, transition:{duration:0.5,delay:delay}
  },
});

function Hero() {
  return (
    <div className="border-b  border-neutral-900 pb-4 md:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
            <div className="flex flex-col items-center md:items-start">
                <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight md:mt-16 md:text-8xl">Harsh Tiwari</motion.h1>
                <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-2">Full Stack Developer</motion.span>
                <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent my-2">Flutter App Developer</motion.span>
                <motion.p variants={container(0.75)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">{HERO_CONTENT}</motion.p>
                <motion.a variants={container(1)} initial="hidden" animate="visible" href={portfolio} download="Resume.pdf"><button className="shadow-lg shadow-blue-900 bg-slate-900 p-2 px-3 rounded-lg hover:outline hover:outline-2 mb-6"><h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent my-2">My Resume</h1></button></motion.a>
            </div>
        </div>
        <div className="w-full md:w-1/2 md:p-8">
            <div className="flex justify-center">
                <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1.25}} className="w-5/6 rounded-3xl shadow-lg shadow-blue-900" src={profilePic} alt="Harsh Tiwari"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

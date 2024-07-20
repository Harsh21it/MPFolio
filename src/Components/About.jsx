import about from "../assets/dark.jpg";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:0.5,delay:0.25}} className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></motion.h1>
      <div className="flex flex-wrap">
        <motion.div whileInView={{x:0,opacity:1}} initial={{opacity:0,x:-100}} transition={{duration:0.5, delay:0.25}} className="w-full md:w-1/2 md:p-0">
            <div className="flex items-center justify-center md:justify-start md:items-start">
                <img className="shadow-lg shadow-blue-900 w-5/6 md:w-4/5 rounded-xl mb-6" src={about} alt="about"/>
            </div>
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{x:100,opacity:0}} transition={{duration:0.5,delay:0.25}} className="w-full md:w-1/2 p-2">
            <div className="flex justify-center items-center xl:m-16 text-justify">
                <p className="my-2 max-w-xl ">{ABOUT_CONTENT}</p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

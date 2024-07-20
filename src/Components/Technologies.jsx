import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import { SiFlutter } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { motion } from "framer-motion";

const iconvariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType:"reverse",
    },
  }
});

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:0.5,delay:0.25}} className="my-20 text-center text-4xl ">Technologies</motion.h1>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5,delay:0.25}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate" className="shadow-lg shadow-blue-900 rounded-2xl border-4 border-neutral-900 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconvariants(1.5)} initial="initial" animate="animate" className="shadow-lg shadow-blue-900 rounded-2xl border-4 border-neutral-900 p-4">
            <FaNodeJs className="text-7xl text-green-600"/>
        </motion.div>
        <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate" className="shadow-lg shadow-blue-900 rounded-2xl border-4 border-neutral-900 p-4">
            <BiLogoFirebase className="text-7xl text-yellow-500"/>
        </motion.div>
        <motion.div variants={iconvariants(1.5)} initial="initial" animate="animate" className="shadow-lg shadow-blue-900 rounded-2xl border-4 border-neutral-900 p-4">
            <SiFlutter className="text-7xl text-cyan-200"/>
        </motion.div>
        <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate" className="shadow-lg shadow-blue-900 rounded-2xl border-4 border-neutral-900 p-4">
            <DiMysql className="text-7xl text-cyan-900"/>
        </motion.div>
        <motion.div variants={iconvariants(1.5)} initial="initial" animate="animate" className="shadow-lg shadow-blue-900 rounded-2xl border-4 border-neutral-900 p-4">
            <DiPython className="text-7xl "/>
        </motion.div>
      </motion.div>
    </div>
  )
}

import { PROJECT } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h1 whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:0.5,delay:0.25}} className="my-20 text-center text-4xl">My Projects</motion.h1>
      <div>
        {PROJECT.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.2,delay:0.25}} className="m-10 w-full md:w-1/4">
              <img src={project.image}
                alt={project.name}
                
                className="shadow-lg shadow-blue-900 mb-6 rounded p-4 my-4"
              />
            </motion.div>
            <div className="w-full md:w-3/4 max-w-xl my-8">
                <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.3,delay:0.3}} className="mb-2 font-semibold">{index+1}{')'} {project.name}</motion.h6>
                <motion.h8 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:200}} transition={{duration:2,delay:0.4}} className="text-sm mb-2 text-neutral-400">{project.description}</motion.h8>
                {
                    project.features.map((feature,index)=>(
                        <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5,delay:0.25}} key={index} className="m-4">{index+1}. {feature}</motion.p>
                    ))
                }
                {
                    project.technologies.map((tech,ind)=>(
                        <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5,delay:0.25}} key={ind} className="m-2 bg-neutral-900 text-sm font-medium p-1 rounded text-purple-700">{tech}</motion.span>
                    ))
                }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

"use client";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./(pages)/canvas";
import herobg from "../../public/assets/herobg.png"
import About from "./(pages)/About";

const Page = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/herobg.png')` }}
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row item-start gap-5`}>
        <div className=" flex flex-col justify-start items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`} >Hi, I am <span className="text-[#915eff]">Abhinav Sharma</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 mb-10`} >I develope mobile and web applications</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start">
            <motion.div
              animate={{ y: [5, 37, 5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-gray-300">

            </motion.div>
          </div>
        </a>
      </div>
      <About/>
    </section>
  );
};

export default Page;

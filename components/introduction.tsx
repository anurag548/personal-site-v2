"use client";

import { personalData } from "@lib/data";
import { useSectionInView } from "@lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Introduction() {
    const {ref} = useSectionInView("Home", 0.5);
    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type:"tween" ,duration: 0.3, }}
                    >

                    <Image src="https://plus.unsplash.com/premium_photo-1714226830926-1af8bf7b06c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                    width={192}
                    height={192}
                    alt="Profile Picture"
                    className="h-24 w-24 rounded-full border-[0.25rem] border-white shadow-xl"
                    />
                    </motion.div>
                    <motion.span className="absolute bottom-0 right-0 text-4xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type:"spring" , stiffness: 260, damping: 20,}}
                    >
                        👋
                    </motion.span>
                </div>
                
            </div>
         
            <motion.div initial={{ opacity:0, y: 100 }} animate={{ opacity: 1, y: 0 }}  className="mb-10 mt-8 px-4 text-base text-center font-medium !leading-[1.5] sm:text-3xl" dangerouslySetInnerHTML={{ __html: personalData.selfDescription }}>
                    
            </motion.div>
            <motion.div  className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}

            >
                <Link  href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"> Contact me here <BsArrowRight/>
                </Link>
                <Link href={personalData.resume} className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"> Download CV <HiDownload/></Link>
                <Link href={personalData.resume} className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"> <FaGithubSquare/></Link>
                <Link href={personalData.resume} className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"> <FaLinkedin/></Link>
            </motion.div>
        </section>
    );
}
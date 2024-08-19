"use client";

import { PersonalData } from '@lib/data';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About")
  const personalData: PersonalData = {
    name: "John Doe",
    selfDescription: "I'm a full-stack developer with 3 years of experience. I specialize in React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    resume: "https://www.google.com",
    about: "I'm a full-stack developer with 3 years of experience. I specialize in React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    // socials: [
    //     {
    //         name: "GitHub",
    //         url: "https://github.com",
    //     },
    //     {
    //         name: "LinkedIn",
    //         url: "https://linkedin.com",
    //     },
    // ],
  }
    return (
        <motion.section
          id='about'
          ref={ref}
          className="mt-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          
        >
        <SectionHeading >About Me</SectionHeading>
        <div dangerouslySetInnerHTML={{ __html: personalData.about}} className='text-justify'></div>
          
        </motion.section>
      );
}

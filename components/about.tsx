"use client";

import { personalData } from '@lib/data';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About")

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

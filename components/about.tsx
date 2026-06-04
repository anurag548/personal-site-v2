"use client";

import { motion } from 'framer-motion';
import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@lib/hooks';
import { usePersonalDataStore } from '@lib/store';

export default function About() {
  const { ref } = useSectionInView("About")
  const personalData = usePersonalDataStore((state) => state.personalData);
  return personalData === null ? (
    <section className="mt-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto mb-8"></div>
      <div className="flex flex-col gap-4 items-center">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      </div>
    </section>
  ) : (
    <motion.section
      id='about'
      ref={ref}
      className="mt-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}

    >
      <SectionHeading >About Me</SectionHeading>
      <div dangerouslySetInnerHTML={{ __html: personalData.about }} className='text-justify'></div>

    </motion.section>
  );
}

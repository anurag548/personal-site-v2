"use client";

import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { ActiveSectionContext, useActiveSection } from '../context/active-section-context-';

export default function Header() {
//   const [activeSection, setActiveSection] =  useState('Home');
   const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSection();
  return (
  <header className="z-[999] relative">
    <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-gray-300 border-opacity-40 bg-white bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-55"
        initial={{ y: -200, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.1  }}
    >
    </motion.div>
    <nav className='flex fixed left-1/2 top-[0.15rem] h-12 -translate-x-1/2 sm:top-[1.17rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
        {links.map(link => (
            <motion.li key={link.hash} className='h-3/4 flex items-center justify-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
            >
                <Link className={clsx(" flex w-full items-center px-3 py-5 hover:text-gray-950  rounded-full transition", {
                    'text-gray-950': activeSection === link.name,    
                })} href={link.hash} 
                onClick={() => {setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());

                }}
                >
                    
                    
                    {link.name}
                    {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full inset-0-z-10 dark:bg-gray-800 active"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
                </Link>
            </motion.li>
        ))}
        </ul>
    </nav>  
  </header>
  );
}

"use client";

import SectionHeading from '@components/section-heading';
import { useSectionInView } from '@lib/hooks'
import React from 'react'
import { ContactAltDivider, SubmitButton } from './widgets';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmail } from '../../actions/send-email';

export default function Contact() {
    const {ref} = useSectionInView('Contact');

  return (
    <motion.section
        id='contact'
        ref={ref}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'>
        <SectionHeading>Contact</SectionHeading>
        <p className='text-lg text-gray-800'>
            If you have any queries or want to discuss a project, feel free to contact me at <a href="mailto:" className='text-blue-500'>mail@anuragsalian.dev</a>
            </p>
            
         <ContactAltDivider />
         <form 
            className="mt-10 flex flex-col dark:text-black"
            action={
              async (formData)=> {
                console.log(formData)
                // await sendEmail(formData)
              }
            }
         >
            <input
              type='email' 
              className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
              placeholder='Your Email'
              required
              name='senderEmail'
              />
            <textarea 
              name="message" 
              id="" 
              className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
              placeholder='Your Message'
              required
              />
            <SubmitButton/>
         </form>
    </motion.section>
  )
}

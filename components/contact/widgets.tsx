import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export function ContactAltDivider() {
  return (
    <div className="relative py-8 ">
    <div className="absolute inset-0 flex items-center ">
      <div className="w-full border-b bg-gray-200 my-24 h-1 rounded-full"></div>
    </div>
    <div className="relative flex justify-center">
      <span className="bg-white rounded-full px-4 py-4 text-sm text-gray-800 ">OR</span>
    </div>
  </div>
  )
}

export function SubmitButton() {
  const {pending} = useFormStatus();

  return (
    <button className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65' type='submit'>
      Submit <FaPaperPlane  className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
      </button>
  )
}
import React from 'react'

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

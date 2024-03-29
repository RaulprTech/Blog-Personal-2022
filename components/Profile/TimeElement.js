import React from 'react'

export default function TimeElement({ current = false, jobTitle, jobDescription, date, place }) {
  return (
    <li>
      <div className="flex-start flex items-center">
        <div className="-ml-2 -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600"></div>
        <h4 className="-mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">{jobTitle}</h4>
      </div>
      <div className="ml-6">
        <h5 className="text-lg font-semibold text-blue-600">{place}</h5>
      </div>
      <div className="mb-6 ml-6 pb-6">
        <span className="text-sm">{date}</span>
        <p className="mb-4 mt-2 text-gray-900 dark:text-gray-200">{jobDescription}</p>
      </div>
    </li>
  )
}

import React from 'react'

export default function TimeElement({
  current = false,
  jobTitle,
  jobDescription,
  date,
  children,
  place,
}) {
  return (
    <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-gray-100  px-4  py-1 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
      <span className=" absolute -left-3 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-primary-200 ring-8 ring-gray-100 dark:bg-green-900 dark:ring-gray-900">
        {children}
      </span>
      <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
        {jobTitle}
        {current && (
          <span className="mr-2 ml-3 rounded bg-primary-100 px-2.5 py-0.5 text-sm font-medium text-primary-800 dark:bg-secondary-400 dark:text-gray-900">
            Presente
          </span>
        )}
      </h3>
      <h4 className="flex items-center text-base font-normal text-primary-600 dark:text-primary-600">
        {place}
      </h4>
      <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">{jobDescription}</p>
    </li>
  )
}

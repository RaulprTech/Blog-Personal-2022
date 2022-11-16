import React from 'react'
import Link from 'next/link'

export default function IconCard({ children, callToAction, message, link }) {
  return (
    <div className="my-2 grid items-start gap-8">
      <div className="group relative">
        <div className="animate-tilt absolute -inset-0.5 rounded-xl bg-gradient-to-r from-secondary-600 to-primary-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <Link href={link}>
          <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-gray-100 px-4 py-4 leading-none dark:bg-gray-900">
            <span className="flex items-center space-x-5 pr-4">
              {children}
              {/* <span className="pr-6 text-gray-100 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                {callToAction}
              </span> */}
            </span>
            <span className="pl-4 text-xs text-gray-900 transition duration-200 group-hover:text-blue-900 dark:text-gray-100 dark:group-hover:text-secondary-400 md:text-sm">
              {message}
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}

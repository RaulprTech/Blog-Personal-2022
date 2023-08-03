import Link from 'next/link'
import React from 'react'

export default function index({ text, link, children }) {
  const isInternalLink = link && link.startsWith('/')
  const isAnchorLink = link && link.startsWith('#')
  let target

  if (isInternalLink) {
    target = '_self'
  }

  if (isAnchorLink) {
    target = '_blank'
  }

  return (
    <Link className="group cursor-pointer text-center" href={link} target={target} rel="noreferrer">
      {text && (
        <div className="flex w-full content-center justify-between rounded-lg border-2 border-primary-700 bg-white px-3 py-1 text-lg font-semibold text-primary-500 group-hover:bg-primary-500 group-hover:text-gray-100 dark:border-primary-500 dark:bg-gray-900">
          {children && (
            <span className="flex items-center space-x-5 pr-4 group-hover:text-white">
              {children}
            </span>
          )}
          <span className=" lg:text-md w-full py-1 text-sm">{text}</span>
        </div>
      )}
    </Link>
  )
}

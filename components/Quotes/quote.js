import React from 'react'
import Link from 'next/link'

export default function quote() {
  return (
    <section className="my-4 flex cursor-default flex-col">
      <blockquote className="rounded-md bg-gray-200 p-6 dark:bg-gray-800">
        <div className="text-md relative md:flex-grow">
          <svg
            className="absolute left-0 top-0 h-8 w-8 -translate-x-9 -translate-y-9 transform text-gray-500 dark:text-gray-300"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <Link
            href="https://www.instagram.com/p/CDrlWijjYTN/?utm_source=ig_web_copy_link"
            target="_blank"
          >
            <p className="relative text-gray-900 dark:text-gray-200">
              <b>Vive como si fueses a morir mañana. Aprende como si fueses a vivir por siempre</b>
            </p>
          </Link>
        </div>
        <footer className="mt-1">
          <p className="text-md text-gray-800 dark:text-gray-300">Mahatma Gandhi</p>
        </footer>
      </blockquote>
    </section>
  )
}

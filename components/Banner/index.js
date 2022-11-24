import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SocialBanner({ title, link, image, emoji, bgColor }) {
  const colorSelect = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-primary-500'
      case 'red':
        return 'bg-red-600'
      case 'yellow':
        return 'bg-yellow-500'
      case 'purple':
        return 'bg-purple-600'
      case 'orange':
        return 'bg-orange-600'
      case 'green':
        return 'bg-green-600'
    }
  }

  return (
    <Link
      className="cursor-pointer text-center text-lg font-bold text-gray-100"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {title && (
        <div
          className={`flex w-full content-center justify-between rounded-md ${colorSelect(
            bgColor
          )} px-4 py-2`}
        >
          {image && (
            <Image
              src={image}
              alt={title}
              width={800}
              height={200}
              className=" h-10 w-20 rounded-lg"
            />
          )}
          <span className=" lg:text-md w-full py-1 text-sm">{title}</span>
          {emoji && <span className="py-1 text-2xl">{emoji}</span>}
        </div>
      )}
    </Link>
  )
}

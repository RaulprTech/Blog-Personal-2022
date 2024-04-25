import Image from './Image'
import Link from 'next/link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

const Card = ({ title, description, imgSrc, href, tags, date }) => {
  return (
    <div className="w-80 pb-4 lg:mx-0 lg:w-full">
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="h-24 object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className=" h-52 w-auto p-3">
          {date && (
            <dl>
              <dt className="sr-only">Fecha de Publicacion</dt>
              <dd className="text-xs font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>{formatDate(date)}</time>
              </dd>
            </dl>
          )}
          <h2 className="mb-3 truncate text-xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="truncate-3l prose mb-3 max-w-none text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className=" flex flex-wrap">
            {tags && tags.map((tag) => <Tag key={tag} text={tag} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

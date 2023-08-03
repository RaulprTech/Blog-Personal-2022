import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, children }) => {
  return (
    <Link
      className="group m-1 cursor-pointer text-center"
      href={`/tags/${kebabCase(text)}`}
      rel="noreferrer"
    >
      {text && (
        <div className="flex w-full content-center justify-between rounded-lg border border-primary-700 bg-white px-2 py-1 text-xs font-normal text-primary-500 group-hover:bg-primary-500 group-hover:text-gray-100 dark:border-primary-500 dark:bg-gray-900 lg:text-sm">
          <span className="">{text.split(' ').join('-')}</span>
          {children && (
            <span className="flex items-center space-x-5 pl-4 group-hover:text-white">
              {children}
            </span>
          )}
        </div>
      )}
    </Link>
  )
}

export default Tag

{
  /* <Link href={`/tags/${kebabCase(text)}`}>
<span className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
  {text.split(' ').join('-')}
</span>
</Link> */
}

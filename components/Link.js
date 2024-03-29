/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, children }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href}>{children}</Link>
  }

  if (isAnchorLink) {
    return <a href={href} {...children} />
  }

  return <a target="_blank" rel="noopener noreferrer" aria-label={href} href={href} {...children} />
}

export default CustomLink

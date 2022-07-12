import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className=" mt-8 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        {/* <div className="mb-3 flex space-x-56">
          <Link href="/">Hola</Link>
          <Link href="/">Hola</Link>
          <Link href="/">Mas Posts</Link>
          <Link href="/">¿Necesitas un Freelance?</Link>
        </div> */}
        <div className="m-2 mb-6 flex space-x-2 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <div>Hecho con ❤️ por </div>
          <div>{siteMetadata.author}</div>
          <div>{` © ${new Date().getFullYear()}`}</div>
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div> */}
      </div>
    </footer>
  )
}

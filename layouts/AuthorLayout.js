import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
// import WorkHistory from '@/components/Profile/Work-history'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <section className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary-500 dark:text-secondary-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sobre mi
          </h1>
        </div>
        <article className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
            <div className="flex justify-center pt-8">
              <a
                href=""
                target="_blank"
                className="shadow-outline-teal inline-flex items-center rounded-full
                bg-secondary-400 px-4 py-3 text-sm font-semibold
                text-gray-900 hover:bg-gray-900 focus:border-secondary-400 focus:outline-none"
                rel="noreferrer"
              >
                Descargar CV
              </a>
            </div>
            {/* <div className="mt-12">
              <h4 className="pt-4 pb-2 text-xl font-bold leading-8 tracking-tight">Experiencia</h4>
              <WorkHistory />
            </div> */}
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </article>
      </section>
    </>
  )
}

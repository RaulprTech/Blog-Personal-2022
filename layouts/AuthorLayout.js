import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Quote from '@/components/Quotes/quote'
import Button from '@/components/Button'
import Skills from '@/components/Skills'

const skills = {
  html: 0,
  css: 0,
  react: 0,
  next: 0,
  tailwind: 0,
  python: 0,
}

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    nickname,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    platzi,
    CV,
  } = frontMatter
  // const router = useRouter()

  return (
    <>
      <PageSEO
        title={`¿Quien es ${name}? - @${nickname}`}
        description={`Trayectoria escolar y profesional, Skills tecnicos, Talleres impartidos y mas sobre ${name}`}
      />
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
              width="192"
              height="192"
              className="h-48 w-48 rounded-full"
            />
            <h2 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h2>
            <h3 className="text-gray-500 dark:text-gray-400">{occupation}</h3>
            <h4 className="text-gray-500 dark:text-gray-400">{company}</h4>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
              <SocialIcon kind="platzi" href={platzi} />
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-3 py-12 lg:grid-cols-1 lg:grid-rows-2">
              <Button link={CV} text="Descargar CV">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 -rotate-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </Button>
            </div>
            <Skills tags={skills} />
            <Quote />
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </article>
      </section>
    </>
  )
}

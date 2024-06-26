import siteMetadata from '@/data/siteMetadata'
// import SocialIcon from '@/components/social-icons'
import Button from '../Button'
import Image from 'next/image'

export default function Presentation() {
  return (
    <section className="mt-4 flex flex-col items-center rounded-3xl pb-4 pt-10">
      <Image
        src="/static/images/logo.png"
        alt="Raul Alberto Pacheco Rodriguez"
        width={80}
        height={80}
        priority={true}
        className="lg:h-100 lg:w-100 h-20 w-20 animate-bounce content-center rounded-md"
      />
      <div className="flex-col py-4 text-center font-extrabold leading-9 tracking-tight">
        <h1 className="block space-x-4 text-xl font-bold text-primary-400 dark:text-primary-400 lg:text-3xl">
          Raúl Pacheco Rodríguez
        </h1>
        <h2 className="text-xl font-bold text-gray-900 dark:text-secondary-400 sm:text-xl md:text-5xl lg:py-5 lg:text-7xl">
          Exploremos juntos los límites de la tecnología
        </h2>
        <h3 className="font-medium text-gray-600 dark:text-gray-300 lg:py-4 lg:text-xl">
          {`${siteMetadata.description}`}
        </h3>
        <div className="mx-auto flex items-center justify-center py-6">
          <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-8 lg:gap-12">
            <Button text="Proyectos" link="projects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 group-hover:skew-y-6 lg:h-10 lg:w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </Button>
            <Button text="Sobre mi" link="about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 group-hover:skew-y-6 lg:h-10 lg:w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
